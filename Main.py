from SqlClass import SQL
from XssClass import XSS
from selenium.common import exceptions
from baseClass import baseClass

def main():
    print("Enter the URL: ")
    URL = input()

    try:
        Sql = SQL(URL)
        Sql.injection()

        Xss = XSS(URL)
        Xss.injection()
    except exceptions.InvalidArgumentException:
        print("URL is broken... \nMay be try again..")
        main()

if __name__ == "__main__":
    main()