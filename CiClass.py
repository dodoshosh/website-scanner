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
