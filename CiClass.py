from baseClass import baseClass
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.common import exceptions



class CI(baseClass):
    def __init__(self,URL):
        self.URL = URL
    def scanning(self):
        print("Scanning...")
        baseClass.public_DRIVER.get(self.URL)
        inputsToInject = baseClass.public_DRIVER.find_elements(By.XPATH, "//input[@type=\"text\" or @type=\"search\" or "
                                                                    "@type=\"email\" or @type=\"password\" or @type=\"url\"]")
                                                                                       # specifcly made for the input type we need
        return inputsToInject

    def injection(self):
        File_object = open(r".\ci_queries.txt", "r+")
        file_data = File_object.read()
        queries_list = file_data.split('^')

        inputsToInject = self.scanning()

        for i in range(len(inputsToInject)):
            for ci_query in queries_list:
                try:
                    inputToInj = inputsToInject[i]
                    inputToInj.clear()
                    inputToInj.send_keys(ci_query)
                    baseClass.public_DRIVER.find_element(By.XPATH, "//input[@type='submit']").click()
                    successed = self.checkSuccess()

                    if successed:
                        print("Vuln Founded\n")
                        return

                except exceptions.StaleElementReferenceException:
                    inputsToInject = self.scanning()



    def checkSuccess(self):
        return #Will be implemented in the next weeks