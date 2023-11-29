# Prosjektkrav
## Funksjonalitet
* Søkemulighet eks. med en dialog/form/søkefelt for input av søk:
    * Har implementert søkefelt med fuzzy search som viser maksimum 10 søkeresultater som matcher søket.
* Listebasert presentasjon av søkeresultatet hvor det er lagt opp til håndtering av store resultatsett med enten blaing i sider, eller dynamisk laster av flere resultater ved scrolling:
    * Siden presenterer 12 "kort" med retter av gangen, og det er implementert blaing med pagination. Hva som vises er data hentet fra databasesøk som påvirkes av sortering og filtrering brukeren kan velge selv.
* Muligheten for å se mer detaljer om hvert av objektene:
    * Ved å trykke på et av kortene vises det mer informasjon av retten man har trykt på (ingredienser og fremgangsmåte).
* Mulighet for sortering og filtrering av resultatsettet (merk at sortering og filtrering skal utføres på hele resultatsettet og ikke bare det som tilfeldigvis er laster inn på klienten):
    * Det er implementert sortering (med mulighetene "(A-Z)", "Category (A-Z)" og "Origin (A-Z)") og filtrering (med mulighetene "Category" og "Origin", hvor du kan velge en kategori, men fler "origin"-land).
* Det skal inngå en eller annen form for brukergenererte data som skal lagres (persistent på databaseserveren) og  presenteres (enten bruker som legger til informasjon, reviews, ratings etc, historikk om søkene eller annet, handleliste):
    * Hver rett har en rating. Ved å klikke på en rett kan brukeren legge til en rating selv, som vil legges til i rettenes rating-liste. Gjennomsnittlig rating er vist på forsiden av hvert individuelle kort (før man trykker på det). Her vises det også en stjerne, som er gul om brukeren har gitt retten en rating.
* Database og backend for prosjektet skal ved innlevering hostes på gruppas virtuelle maskin:
    * Databasen og backend hostes på gruppas virtuelle maskin.

## Design
Gruppen har gått for et ryddig design, og tatt inspirasjon fra andre sider med matoppskrifter (f.eks. [matprat.no](https://www.matprat.no/oppskrifter/)). Gruppen lagde først designet i Figma, før det ble implementert. Det var et kontinuerlig fokus å sørge for responsivt, universelt utformet og bærekraftig design. Mer om våre valg rundt tilgjengelighet og bærekraft ligger under respektive overskrifter. Vi har valgt å vise frem bilde av, navn på og rating til hver rett, for vi vurderte dette til å være det mest essensielle for hvilke rett en bruker vil lage. Vi har også godt for et ryddig og moderne design, da det følger nåtidens trender for designprinsipp. 

## Tilgjengelighet
### Fontvalg
`font-family: Helvetica, Inter, system-ui, Avenir, Arial, sans-serif;`

Vi har en font-familie med fler fonter. Her vil Helvetica, Inter og system-ui brukes i majoriteten av tilfeller. Vi har ikke truffet et tilfelle hvor siden ikke er vist med en av disse, så resten er kun et sikkerhetsnett.

#### Helvetica
`Helvetica` har klare bokstaver uten særlig overflødig serif. Det er også en grotesk font, med like store streker. Dette gjør at den er enkel å lese for den generelle befolkningen og svaksynte. 

Her har vi tatt et valg om å prioritere den generelle befolkningen og svaksynte ovenfor å ha en dysleksivennlig font. En dysleksivennlig font vil sørge for at bokstaver som ser like ut, ser mindre like ut, som for eksempel "b" og "p". Et eksempel på en slik font er OpenDyslexic. Vi tok dette valget fordi det trolig er fler i målgruppen uten dysleksi enn med dysleksi. Det påvirker også den generelle estetikken til siden.

Hovedgrunnen til at vi valgte `Helvetica` som font er at den er preinstallert på de fleste PCer. Dette gjør at vi har kontroll over hvilken font brukeren ser, og at den ikke vil falle tilbake på en lenger nede på `font-family`-lista.

#### Inter
`Inter-fonten` er god av mange av de samme grunnene som `Helvetica`. Det er også en grotesk font som er lett å lese. Grunnen til at vi har den på plass to i vår `font-family` er at den ikke er preinstallert på fler PCer.

#### System UI
`system-ui`-fonten viser til brukerens maskins standard font. Dette gjør at fonten er kjent for brukeren. Dette betyr også at den er designet for å være lesbar på brukerens maskin, og at nettsiden vil føles mer sammenslått med brukerens generelle dataopplevelse. Om brukeren har endret skriftstørrelsen i innstillingene på maskinen sin er det mer sannsynlig at det inntreffer med `system-ui`-fonten.

### Farge- og formvalg
Vi har valgt farger med klare kontraster. Primært brukes sort som bakgrunnsfarge og hvit på all tekst på selve hovedsiden. Kortene har en grå farge med hvit tekst, og et bilde. Grunnet bildet mener vi det er tydelig hvor kortene er plassert. Siden har også oransj som en aksentfarge, som passer godt fordi mange retter har et preg av oransj eller jordtoner. I tillegg gir det siden en varm og hjemlig følelse. De trykkbare elementene på siden er generelt store, som gjør det lett for en bruker med mindre kontroll over motorikken å treffe riktig. 


### HTML-tags
I annet enn komponentene vi har importert fra TailwindCSS har vi jobbet for å bruke HTML-tags. Dette er lesbart for skjermlesere, og trykkbare HTML-tags er automatisk mulig å navigere seg til med tastaturet. Her kunne gruppen lagt inn mer innsats i å bruke button rundt enkelte elementer, som kortene på siden vår. Dette hadde ført til bedre universell utforming. Gruppen har også sørget for at man kan navigere seg til alle klikkbare elementer med tab, og klikke seg inn på de med enter.

## Bærekraft
* Vi bruker pagination for å kun laste inn 12 elementer av gangen, og laster derfor ikke inn unødvendig mye data.
* Hvert av elementene i datasettet hadde en eller to versjoner av bildene. De elementene med to versjoner hadde et stort og et lite bilde. Vi skulle gjerne kunnet utnyttet bilde ved lavere kvalitet på kortene, da bildene er små på skjermen og at vi laster inn fler av de. Dette lot seg dessverre ikke gjøre da ikke alle elementene i datasettet hadde to versjoner.
* Fuzzy search henter en liste over navn på alle rettene. Dette kallet henter omtrent 6.7 kB data. Vi regnet dette som mer bærekraftig enn å hente inn en liste med søkeresultater som matcher søkeresultatet kontinuerlig mens brukeren skriver. Vi velger også å fremvise det som en liste under søkefeltet, da det hadde blitt et betydelig større kall om man hadde måttet hente bildene til alle rettene også. Da hadde heller ikke pagination hatt like mye for seg, siden man allerede har lastet inn mesteparten av hvert objekt.
* Vi cacher informasjonen fra tidligere retter som er lastet inn. Dette gjør at samme retter ikke lastes inn fler ganger. 
* Vi har valgt å holde oss til mørke farger, da dette på enkelte skjermer bruker mindre energi å vise på skjermen.

## Bruk  av teknologi
* Database og backend for prosjektet hostet på gruppas virtuelle maskin:
    * Databasen og backend for prosjektet hostes på gruppa vår sin virtuelle maskin
* Bruk av React og programmert i Typeskript. Prosjektet satt opp med Vite:
    * Vi har programmert i React og primært brukt TypeScript. Enkelte steder krevde koden og kodekvalitetverktøyene våre (lint og Prettier) at vi brukte .mjs filer. Prosjektet ble satt opp med Vite.
* Bruk av global state managment på et eller annet vis:
    * Vi bruker Apollo Client med en InMemoryCache() for å cache dataen vi laster inn. Dette gjør at dataen ikke lastes inn igjen om brukeren blar til en tidligere side med retter den allerede har lastet inn. Dette er spesielt datasparende grunnet bildene vi laster inn. Vi bruker også Apollo Client til å hjelpe oss med våre queries og mutations.
* Egenutviklet GraphQL backend:
    * Vi har en egenutviklet GraphQL backend og bruker apollo server express.
* Bruk av gode og relevante komponenter og bibliotek:
    * Vi bruker TailwindCSS biblioteket sine komponenter.

## Testing og kvalitetskontroll
* Linting og bruk av Prettier:
    * Vi har brukt linting og Prettier
* Gjennomført testing av komponenter: 
    * Vi har gjennomført testing av vår header og footer. Testdekningsgraden her kunne med fordel vært større.
* En form for automatisert end-2-end testing:
    * Vi har brukt Cypress for å ha en automatisert end-2-end testing.

## Utvikling
* Dokumentasjonen skal diskutere, forklare og vise til alle de viktigste valgene og løsningene som gruppa gjør (inklusive valg av komponenter og api):
    * README filen, samt denne "Prosjektkrav" filen dokumenterer og diskuterer våre valg.
* Lettlest og godt strukturert og kommentert slik at den er lett å sette seg inn i. 
    * Vi kunne kommentert koden noe mer, men vi mener vi generelt har brukt hensiktsmessige funksjon- og variabelnavn, og at koden derfor er lesbar. Likevel kunne koden med fordel vært nøyere kommentert.
* God struktur på kodebasen (hensiktsmessig bruk av kataloger og filer):
    * Vi har fått kommentarer på filstrukturen vår. Vi forstår hvor kritikken kommer fra, men dette er en filstruktur gruppemedlemmene er kjent med fra før, og den har funket for oss under utvikling.
* Er prosjektet “reproduserbart”? I praksis betyr det at prosjektet skal være godt dokumentert og enkelt å installere/kjøre for andre:
    * Prosjektet er reproduserbart. Det er ingenting i koden som må endres for personen som kloner det fra gitlab. Det er også gode forklaringer på hvordan man setter det opp, og vi har lagt inn kommando for at `npm start` kjører både frontend og backend. 