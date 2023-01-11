from SqlClass import SQL
from XssClass import XSS
from selenium.common import exceptions
from baseClass import baseClass

def WebScan(url):

    try:
        Sql = SQL(url)
        Sql.injection()

        Xss = XSS(url)
        Xss.injection()

        return({"report":"Succsesfully Scan", "score":'10'})
    except exceptions.InvalidArgumentException:
        return({"report":"URL is broken...", "score":'?'})