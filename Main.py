from SqlClass import SQL
import XssClass as XC
from baseClass import baseClass

if __name__ == "__main__":
    obj = baseClass("a")
    sqlobj = SQL(obj)
    sqlobj.injection()
