from baseClass import baseClass
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC


class XSS(baseClass):
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
        File_object = open(r".\xss_queries.txt", "r+")
        file_data = File_object.read()
        queries_list = file_data.split('^')

        inputsToInject = self.scanning()

        for inputToInj in inputsToInject:
            for sql_query in queries_list:
                inputToInj.send_keys(sql_query)
                successed = self.checkSuccess()
                if successed:
                    print("Vuln Founded")

    def checkSuccess(self):#Will be implemented later
        if EC.alert_is_present():
            print("Xss Injection Succeeded")