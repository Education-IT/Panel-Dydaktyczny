def main():

    #class zwierzęta():
       # pass #jest to specjalne polecenie które
        #    # powoduje że nie musimy nic wpisywać
          #  # w klasie lub funkcji

    class zwierzęta():
        ulubiony_kolor = "czerwony"
        def oddychanie(self):
            print("Oddycha")

        def spanie(self):
            print("śpi")

        def je(self):
            print("je")

    class ssaki(zwierzęta):
        def picieMleka(self):
            print("Pije mleko matki")

    class gady(zwierzęta):
        pass

    class kot(ssaki):
        pass

    class krolik(ssaki):
        imie = "Bella"

    # obiekt -> to specjalna zmienna

    Bonifacy = kot()
    Bonifacy.picieMleka()
    Wojtuś = kot()
    Wojtuś.oddychanie()
    print(Bonifacy)
    Bella = krolik()
    print(Bella.ulubiony_kolor)

    Bella.ulubiony_kolor = "Niebieski"
    print(Bella.ulubiony_kolor)

    caccecwec = krolik()
    print(caccecwec.imie)
 
main()