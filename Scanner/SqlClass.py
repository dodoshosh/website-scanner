from baseClass import baseClass
from selenium.webdriver.common.by import By
from selenium.common import exceptions
from selenium.webdriver.support import expected_conditions as EC


class SQL(baseClass):
    def __init__(self,URL):
        self.URL = URL
    def scanning(self):
        print("Scanning...")
        baseClass.public_DRIVER.get(self.URL)
        inputsToInject = baseClass.public_DRIVER.find_elements(By.XPATH, "//input[@type=\"text\" or @type=\"search\" or "
                                                                         "@type=\"email\" or @type=\"password\" or @type=\"url\"]")
        #specifcly made for the input type we need
        return inputsToInject

    def injection(self):
        File_object = open(
            r"../Scanner/sql_queries.txt", "r+")
        file_data = File_object.read()
        queries_list = file_data.split('^')

        inputsToInject = self.scanning()

        for i in range(len(inputsToInject)):
            for sql_query in queries_list:
                try:
                    inputToInj = inputsToInject[i]
                    inputToInj.clear()
                    inputToInj.send_keys(sql_query)
                    baseClass.public_DRIVER.find_element(By.XPATH, "//input[@type='submit']").click()
                    successed = self.checkSuccess(sql_query)

                    if successed:
                        print("Vuln Founded\n")
                        return

                except exceptions.StaleElementReferenceException:
                    inputsToInject = self.scanning()


    def checkSuccess(self, query):
        if query in baseClass.public_DRIVER.page_source:
            print("SQL Injection Succeeded\n")
            return True
        elif baseClass.public_DRIVER.current_url != self.URL:
            print("SQL Injection Succeeded\n")
            return True

        return False