from baseClass import baseClass
from selenium.webdriver.common.by import By


class XSS(baseClass):

    def scanning(self):
        print("Scanning...")
        baseClass.public_DRIVER.get() #TODO: add the user's URL
        inputsToInject = baseClass.public_DRIVER.find_elements(By.XPATH, "//input[@type=\"text\" or @type=\"search\" or "
                                                                    "@type=\"email\" or @type=\"password\" or @type=\"url\"]")
                                                                                       # specifcly made for the input type we need
        return inputsToInject

    def injection(self):
        File_object = open(r"xss_queries.txt", "r+")
        file_data = File_object.read()
        queries_list = file_data.split('^')
        for sql_query in queries_list:
            print('\n', sql_query, '\n')
