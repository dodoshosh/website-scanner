import baseClass
class SQL(baseClass):
    def injection(self):
        File_object = open(r"sql_queries.txt", "r+")
        file_data=File_object.read()
        queries_list=file_data.split('^')
        for sql_querie in queries_list:
            print('\n',sql_querie,'\n')


def main():
    obj = baseClass("a")
    sqlobj = SQL(obj)
    sqlobj.injection()
if __name__ == "__main__":
    main()
