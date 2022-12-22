
![enter image description here](https://raw.githubusercontent.com/Education-IT/Panel-Dydaktyczny/main/images/banner.png)
## Projekt zaliczeniowy na przedmiot - ***Języki programowania JavaScript*** - **UAM**

> **Zrealizowano w piątym semestrze studiów informatycznych.**

Projekt ten jest na co dzień przeze mnie wykorzystywany do pracy dydaktycznej z dziećmi i młodzieżą. Służy mi głównie, jako idealne centrum niezbędnych materiałów czy programów jakie to młodzi uczniowie (pracujący na firmowych laptopach) mogą szybko i z łatwością pobrać je, czy to na zajęciach czy w domu. Starsi uczniowie natomiast, których to aktualnie uczę podstaw języka Python - otrzymują dostęp do skonsolidowanej wiedzy, podsumowania każdej z lekcji oraz linki do filmów na YouTube czy wyzwania domowe. 

Moja strona zawiera również proste REST API. umożliwiające mi działania CRUD na bazie danych. Backend aplikacji napisany jest w języku PHP.   

Stronę traktuję również jako skromną wizytówkę. Umożliwiaj rodzicom czy uczniom wysłanie w prosty sposób maila do mnie poprzez formularz na stronie.

**Stos technologiczny:**
![Angular](https://img.shields.io/badge/Angular-DD0031.svg?style=for-the-badge&logo=Angular&logoColor=white) ![TypeScript](https://img.shields.io/badge/PHP-777BB4.svg?style=for-the-badge&logo=PHP&logoColor=white) ![PHP](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white) ![SQL](https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white) ![PHPmyAdmin](https://img.shields.io/badge/phpMyAdmin-6C78AF.svg?style=for-the-badge&logo=phpMyAdmin&logoColor=white) ![HTML](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white) [ ![enter image description here](https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://education-it.pl/)


## Specyfikacja:
 **Wymagania funkcjonalne:**
1) **Strona startowa:**
-> Możliwość pobrania CV dydaktyka.
-> Możliwość przekierowania się do innych widoków aplikacji z poziomu strony startowej.
-> Możliwość przekierowania się do innych stron: takich jak GitHub, LinkedIn, Facebook.

2) **Strona kontaktowa:**
-> Możliwość napisania e-maila prosto ze strony internetowej.

3) **Panel widoku ucznia:**
-> Wyświetlenie uczniowi wszystkich tematów dotychczasowo dodanych podsumowań lekcji.
-> Możliwość wyboru wyświetlenia zawartości interesującego ucznia podsumowania lekcji.
-> Przycisk umożliwiający uczniowi wielokrotne wygenerowanie losowego GIF'a za pomocą API firmy GIPHY. Giphy są losowane na podstawie wylosowanego tagu z stworzonej przeze mnie listy.
-> Możliwość pobrania gotowych programów w języku MakeCode i Python dodanych ręcznie na serwer przez    	   nauczyciela.
 
4) **Strona Logowania:**
-> Pobierane jest zdjęcie oraz przypisane do niego dane za pośrednictwem API firmy NASA. Codziennie umieszczane jest inne zdjęcie wraz z jego opisem. 
-> Zamockowane Logowanie - wykorzystujące local-storage,

5) **Panel dydaktyczny nauczyciela:**
-> Wyświetlanie i funkcjonalności takie same jak w panelu widoku ucznia z wyłączeniem przycisku generującego GIF'y.
-> Możliwość dodania nowych podsumowań lekcji za pośrednictwem formularzy na stronie.
-> Możliwość usuwania oraz aktualizowania dotychczasowo stworzonych podsumowań lekcji.
 

**Wymagania pozafunkcjonalne:**
1) Strona powinna się załadować w mniej niż 1 sekundę.
2) Strona powinna być opublikowana na serwerze innym niż lokalnym. + Strona powinna być uruchamiana za pomocą protokołu http -  szyfrowanym za pomocą protokołu TLS (https)
3) Strona powinna mieć zaimplementowane REST API w języku PHP.

**Potencjalni odbiorcy:**
* Wszelkiego rodzaju dydaktycy. Tacy jak np.: nauczyciele, korepetytorzy, instruktorzy czy wykładowcy.
* Uczniowie / klienci - osób wymienionych powyżej.

**Potencjalne korzyści dla użytkowników:**
* Łatwość i prostota w skonsolidowanym dostępie i udostępnianiu materiałów dydaktycznych. (podsumowania lekcji, przydatnych linków, gotowych programów i wyzwań domowych. )
* Strona promocyjna.
* Łatwość w przekazywaniu uczniom w trakcie zajęć plików na których będą pracować. Możliwość pobrania ich ze strony internetowej nauczyciela.
