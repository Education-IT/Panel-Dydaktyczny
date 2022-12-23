def main():

    class czlowiek():
        def __init__(self,PodaneImie,PodanyWiek,PodanyWzrost,PodanyUlubionyKolor):
            self.imie = PodaneImie
            self.wiek = PodanyWiek
            self.wzrost = PodanyWzrost
            self.ulubionyKolor = PodanyUlubionyKolor

        def Przedstaw_Się(self):

           print(f"Cześć mam na imię {self.imie}. Mam {self.wiek} lat. I mam {self.wzrost} cm wzrostu!")

        def rusza_sie(self):
            print("Poruszam się")

        def je_jabłko(self):
            print("Jem jabłko")

        def piję_wodę(self):
            print("Piję wodę")

    class nauczyciel(czlowiek):
        def init(self, PodaneImie, PodanyWiek, PodanyWzrost, PodanyUlubionyKolor,PodanyProwadzonyPrzedmiot):
            self.imie = PodaneImie
            self.wiek = PodanyWiek
            self.wzrost = PodanyWzrost
            self.ulubionyKolor = PodanyUlubionyKolor
            self.prowadzonyPrzedmiot = PodanyProwadzonyPrzedmiot

        def uczuć_dzieci_WF(self):
            print("Gramy w piłę!")

        def zrób_test_z_WF(self):
            print("Wyciągamy karteczki!")

        def gramy_w_Kosza(self):
            print("Gramy w koszykówę")

    class dyrektor(nauczyciel):
        def zwolnij_nauczyciela(self):
            print("Spóźniłeś się 10 min - Zwalniam Cię!")
            self.je_jabłko()
            print(":) Mmm pyszne jabłuszko")

        def zatrudnij_nauczyciela(self):
            print("Jesteś super - witamy na pokładzie!")

    Ananasik = czlowiek("Rysio",12,145.5,"Zielony")
    Mikołaj = czlowiek("Mikołaj",12,150,"Niebieski")
    Wojciech = czlowiek("Wojciech",12,160,"Zielony")
    Krystian = nauczyciel("Krystian",23,179.5,"Niebieski","Python-Programowanie")
    Mateusz = dyrektor("Mateusz",30, 176,"NiebieskiLiskowy","MINECRFATA!")

    Ananasik.Przedstaw_Się()
    Wojciech.Przedstaw_Się()
    Mikołaj.Przedstaw_Się()

main()