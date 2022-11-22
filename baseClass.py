class baseClass:
    def __init__(self,URL):
        self.URL = URL
    def scanning(self):
        raise NotImplementedError()
    def injection(self):
        raise NotImplementedError()
    def result(self):
        raise NotImplementedError()
class SQL(baseClass):
    def injection(self):
        File_object = open(r"sql_queries.txt", "r+")
        file_data=File_object.read()
        queries_list=file_data.split('^')
        for sql_querie in queries_list:
            print('\n',sql_querie,'\n')
class XSS(baseClass):
    def injection(self):
        File_object = open(r"-------", "r+")   #needs to get the file first!!!!
        file_data=File_object.read()
        queries_list=file_data.split('^')
        for sql_querie in queries_list:
            print('\n',sql_querie,'\n')
obj=baseClass("a")
sqlobj=SQL(obj)
sqlobj.injection()
