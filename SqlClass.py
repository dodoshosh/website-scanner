import baseClass


class SQL(baseClass):
    def injection(self):
        File_object = open(r"sql_queries.txt", "r+")
        file_data = File_object.read()
        queries_list = file_data.split('^')
        for sql_querie in queries_list:
            print('\n', sql_querie, '\n')
