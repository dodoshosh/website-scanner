from baseClass import baseClass
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.common import exceptions
import requests


class CSRF(baseClass):
    def __init__(self, URL):
        self.URL = URL

    def scanning(self):
        res = requests.get(self.URL)
        headers = res.headers
        return headers  # In CSRF we check the headers instead of injecting

    def injection(self):
        File_object = open(r".\csrf_headers.txt", "r+")
        file_data = File_object.read()
        headers_list = file_data.split('^')

        headersToCheck = self.scanning()

        for i in range(len(inputsToInject)):
            for header in headers_list:
                try:
                    successed = self.checkSuccess(header, headersToCheck)

                    if successed:
                        print("Vuln Founded\n")
                        return

                except exceptions.StaleElementReferenceException:
                    inputsToInject = self.scanning()

    def checkSuccess(self, header, requests_headers):
        return  # Will be implemented in the next weeks
