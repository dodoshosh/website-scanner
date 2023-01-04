from baseClass import baseClass
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.common import exceptions



class CSRF(baseClass):
    def __init__(self,URL):
        self.URL = URL
