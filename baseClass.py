class baseClass:
    def __init__(self,URL):
        self.URL = URL
    def scanning(self):
        raise NotImplementedError()
    def injection(self):
        raise NotImplementedError()
    def result(self):
        raise NotImplementedError()