from baseClass import baseClass


class XSS(baseClass):
    def injection(self):
        File_object = open(r"xss_queries.txt", "r+")
        file_data = File_object.read()
        queries_list = file_data.split('^')
        for sql_query in queries_list:
            print('\n', sql_query, '\n')
