import SqlClass
import XssClass
import baseClass

obj = baseClass("a")
sqlobj = SQL(obj)
sqlobj.injection()
