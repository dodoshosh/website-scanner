from SqlClass import SQL
from XssClass import XSS
from baseClass import baseClass

if __name__ == "__main__":
    obj = baseClass("a")
    sqlobj = SQL(obj)
    sqlobj.injection()

    obj = baseClass("a")
    xssobj = XSS(obj)
    xssobj.injection()
