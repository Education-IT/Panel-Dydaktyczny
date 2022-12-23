def suma():
    print("Witamy w funkcji dodawania! 🙂 ")
    liczba1 = int(input("wprowadz liczbę pierwszą "))
    liczba2 = int(input("wprowadz liczbę drugą "))
    wynik = liczba1 + liczba2
    print(wynik)

def mno():
    print("Witamy w funkcji mnożenia! 🙂 ")
    liczba1 = int(input("wprowadz liczbę pierwszą "))
    liczba2 = int(input("wprowadz liczbę drugą "))
    wynik = liczba1 * liczba2
    print(wynik)

def odejm():
    print("Witamy w funkcji odejmowawania! 🙂 ")
    liczba1 = int(input("wprowadz liczbę pierwszą "))
    liczba2 = int(input("wprowadz liczbę drugą "))
    wynik = liczba1 - liczba2
    print(wynik)

def main():
    numer = 0
    while (numer != 4):  # NIE RÓWNA SIĘ - czyli x Nie jest Y
        print("-----------------------------------------------------------------")
        print("---=== Program 4 super programistów ===---")
        print("1 -> sumowanie liczb")
        print("2 -> mnożenie liczb")
        print("3 -> odejmowanie liczb")
        print("4 -> ZAKOŃCZENIE DZIAŁANIA APLIKACJI")
        print("-----------------------------------------------------------------")
        numer = int(input("Wprowadź numer programu który Cię interesuje"))

        if numer == 1:
            suma()
        elif numer == 2:
            mno()
        elif numer == 3:
            odejm()
        numer = int(input("Wprowadź numer programu który Cię interesuje"))
main()