def main():
    print("this is {} main method".format(__name__))
if __name__=="__main__":
    main()
else:
    print(__name__)   
