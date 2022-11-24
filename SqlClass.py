from baseClass import baseClass


class SQL(baseClass):
    def injection(self):
        File_object = open(
            r"C:\Users\magshimim\\Documents\magshimim\\Web Vulns Scanner\\Shimon\hadera-804-shimon\\sql_queries.txt", "r+")
        file_data = File_object.read()
        queries_list = file_data.split('^')
        for sql_query in queries_list:
            print('\n', sql_query, '\n')
