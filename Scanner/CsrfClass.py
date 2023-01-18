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
        File_object = open(r"..\Scanner\csrf_headers.txt", "r+")
        file_data = File_object.read()
        headers_list = file_data.split('^')

        headersToCheck = self.scanning()

        found = False

        for i in range(len(headersToCheck)):
            for header in headers_list:
                try:
                    found = self.checkSuccess(header, headersToCheck)

                except exceptions.StaleElementReferenceException:
                    inputsToInject = self.scanning()

        if found is False:
            print("Vuln Founded\n")
            return

    def checkSuccess(self, header, requests_headers):
        if (header in requests_headers):
            return True
        return False
