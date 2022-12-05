from SqlClass import SQL
from XssClass import XSS
from baseClass import baseClass
def main():
    #obj = baseClass("a")
    sqlobj = SQL("a")
    sqlobj.injection()

    # = baseClass("a")
    xssobj = XSS("a")
    xssobj.injection('a')
if __name__ == "__main__":
    main()