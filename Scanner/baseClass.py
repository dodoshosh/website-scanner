import requests
import webbrowser
from selenium import webdriver
from abc import ABC, abstractmethod
class baseClass(ABC):
    public_DRIVER = webdriver.Chrome(executable_path="C:\chromedriver.exe")
    @abstractmethod
    def __init__(self, URL):
        pass

    def scanning(self):
        raise NotImplementedError()

    def injection(self):
        raise NotImplementedError()

    def result(self):
        raise NotImplementedError()




'''
class SQL(baseClass):
    def injection(self):
        File_object = open(r"sql_queries.txt", "r+")
        file_data = File_object.read()
        queries_list = file_data.split('^')
        for sql_query in queries_list:
            r = requests.post(url=self.URL, data=sql_query)
            print(r)
            print('\n', sql_query, '\n')


class XSS(baseClass):
    def injection(self):
        File_object = open(r"new_que.txt", "r+")
        file_data = File_object.read()
        queries_list = file_data.split('^')
        for xss_query in queries_list:
            r = requests.post(url=self.URL, data=xss_query)
            print(r)
            print('\n', xss_query, '\n')
'''