import { Flex, Heading, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"

const RegInside = ({ delay }) => {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 30 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 30 },
    }
    return (
        <>
            <Flex mt={'50px'} flexDir={'column'} textAlign={'left'}>
                <motion.div
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.2, delay }}>
                    <Heading fontSize={'125px'}>Regulamin</Heading>
                    <br />
                    <Text fontSize={'lg'}>POLITYKA PRYWATNOŚCI SERWISU www.verdimeble.pl</Text>
                </motion.div>
                <br />
                <motion.div
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.3, delay }}>
                    <p>Ochrona prywatności Użytkowników jest dla <strong>VERDI MEBLE CEZARY PANEK</strong> szczególnie ważna. Z&nbsp;tego względu Użytkownicy Serwisu <strong>www.verdimeble.pl</strong> mają zagwarantowane wysokie standardy ochrony prywatności.
                        <strong>VERDI MEBLE CEZARY PANEK</strong> jako administrator danych dba o&nbsp;bezpieczeństwo udostępnionych przez&nbsp;Użytkowników danych.</p>
                </motion.div>

                <br />
                <br />
                <motion.div
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.4, delay }}>
                    <div style={{ textIndent: '20px' }}>
                        <p>Celem Administratora jest również należyte informowanie Użytkowników o&nbsp;prawach i&nbsp;obowiązkach związanych z&nbsp;przetwarzaniem danych osobowych, szczególnie wobec treści przepisów o&nbsp;ochronie danych osobowych określonych
                            w&nbsp;rozporządzeniu Parlamentu Europejskiego i&nbsp;Rady (UE 2016/679 z&nbsp;dnia 27.04.2016r. w&nbsp;sprawie ochrony osób fizycznych w&nbsp;związku z&nbsp;przetwarzaniem danych osobowych i&nbsp;w&nbsp;sprawie swobodnego
                            przepływu takich danych oraz&nbsp;uchylenia dyrektywy 95/46/WE (dalej jako „RODO”. Dlatego też, dbając o&nbsp;ochronę prywatności Użytkowników Serwisu, w&nbsp;niniejszym dokumencie Administrator informuje o&nbsp;podstawach
                            prawnych przetwarzania danych osobowych przekazanych przez&nbsp;Użytkowników w&nbsp;związku z&nbsp;korzystaniem przez&nbsp;nich z&nbsp;Serwisu <strong>www.verdimeble.pl</strong> <em>(dalej jako „Serwis”</em>, sposobach zbierania,
                            przetwarzania i&nbsp;ochrony danych osobowych, a&nbsp;także o&nbsp;prawach Użytkowników.</p>
                        <p>Użytkownikiem jest każda osoba fizyczna, której&nbsp;dane dotyczą, korzystająca z&nbsp;serwisu internetowego <strong>www.verdimeble.pl</strong> lub usług elektronicznych dostępnych za&nbsp;pośrednictwem Serwisu.</p>
                        <p>Administratorem danych osobowych udostępnionych przez&nbsp;Użytkownika w&nbsp;Serwisie <strong>www.verdimeble.pl</strong> jest <strong>VERDI MEBLE CEZARY PANEK, Waleriana Łukasińskiego 118 71-215 Szczecin, NIP 8512384812, </strong> <em>(dalej jako „Administrator”</em>.</p>
                        <ol>
                            <li><strong>ZGODA UŻYTKOWNIKA</strong><br /> Korzystanie z&nbsp;Serwisu <strong>www.verdimeble.pl</strong> przez&nbsp;Użytkownika oznacza, że&nbsp;Użytkownik akceptuje, że&nbsp;Administrator gromadzi oraz&nbsp;wykorzystuje dane osobowe
                                zgodnie z&nbsp;niniejszą Polityką Prywatności.
                                <p></p>
                                <p>Dane osobowe Użytkownika Serwisu są przetwarzane przez&nbsp;Administratora w&nbsp;oparciu o&nbsp;jego zgodę, zaś w&nbsp;niektórych przypadkach opisanych w&nbsp;niniejszym dokumencie, w&nbsp;ramach prawnie uzasadnionego
                                    interesu Administratora. Użytkownik ma prawo w&nbsp;dowolnym momencie wycofać wyrażoną wcześniej zgodę. Wycofanie zgody nie&nbsp;wpływa na&nbsp;zgodność z&nbsp;prawem przetwarzania, którego&nbsp;dokonano na&nbsp;podstawie
                                    zgody przed&nbsp;jej wycofaniem.</p>
                                <p>W&nbsp;przypadku, gdy&nbsp;nastąpi zmiana niniejszej Polityki Prywatności, a&nbsp;Użytkownik nadal będzie korzystał z&nbsp;Serwisu, to&nbsp;poczytuje się to&nbsp;za&nbsp;wyrażenie zgody na&nbsp;aktualne warunki Polityki
                                    Prywatności.
                                </p>
                            </li>
                            <li><strong>DANE OSOBOWE PRZETWARZANE PRZEZ&nbsp;ADMINISTRATORA</strong>
                                <ol >
                                    <li><strong>Sposób pozyskiwania danych osobowych</strong><br /> Administrator pozyskuje dane osobowe bezpośrednio od&nbsp;Użytkownika za&nbsp;pośrednictwem Serwisu, poprzez wypełnienie przez&nbsp;Użytkownika formularza kontaktowego
                                        dostępnego w&nbsp;Serwisie i&nbsp;przesłanie za&nbsp;jego pośrednictwem wiadomości do&nbsp;Administratora.
                                        <p></p>
                                        <p>Podanie danych osobowych zawartych w&nbsp;formularzu kontaktowym jest dobrowolne</p>
                                    </li>
                                    <li><strong>Rodzaje przetwarzanych danych osobowych</strong><br /> Administrator gromadzi za&nbsp;pośrednictwem Serwisu następujące dane osobowe dotyczące Użytkownika:
                                        <p></p>
                                        <ol >
                                            <li>Imię i&nbsp;nazwisko;</li>
                                            <li>Adres e-mail;</li>
                                            <li>Treść wiadomości;</li>
                                            <li>Temat wiadomości.</li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li><strong>CELE PRZETWARZANIA DANYCH OSOBOWYCH</strong><br /> Sposób przetwarzania przez&nbsp;Administratora danych dotyczących Użytkownika zależy od&nbsp;sposobu korzystania przez&nbsp;Użytkownika z&nbsp;Serwisu i&nbsp;dostępnych
                                w&nbsp;nim funkcjonalności. Administrator przetwarza dane osobowe Użytkownika w&nbsp;następujących celach:
                                <p></p>
                                <ol >
                                    <li><strong>Komunikacji z&nbsp;Użytkownikiem.</strong><br /> Administrator wykorzystuje dane osobowe Użytkownika w&nbsp;celu komunikacji z&nbsp;nim w&nbsp;spersonalizowany sposób. Komunikowane Użytkownikowi informacje dotyczą
                                        oferowanych produktów lub usług, bezpieczeństwa danych osobowych, aktualizacji sieci, przypomnień, ale&nbsp;również sugerowanych ofert Administratora lub jego partnerów. Komunikacja z&nbsp;Użytkownikiem dotyczy
                                        także obsługi Użytkownika. Dane osobowe wykorzystywane są w&nbsp;celu pomocy Użytkownikowi, rozwiązaniu problemów technicznych oraz&nbsp;odpowiedzi na&nbsp;jego skargi lub reklamacje.</li>
                                    <li><strong>Przedstawiania Użytkownikowi ofert handlowych drogą elektroniczną.</strong><br /> Celem korzystania z&nbsp;danych osobowych Użytkownika udostępnionych przez&nbsp;niego za&nbsp;pośrednictwem formularza kontaktowego
                                        dostępnego w&nbsp;Serwisie jest komunikacja marketingowa prowadzona przez&nbsp;Administratora w&nbsp;ramach prowadzonej działalności, w&nbsp;szczególności przedstawianie ofert handlowych Użytkownikowi drogą elektroniczną.</li>
                                    <li><strong>Przedstawiania Użytkownikowi ofert handlowych w&nbsp;kontakcie telefonicznym.</strong><br /> Celem korzystania z&nbsp;danych osobowych Użytkownika udostępnionych przez&nbsp;niego za&nbsp;pośrednictwem formularza
                                        kontaktowego dostępnego w&nbsp;Serwisie jest komunikacja marketingowa prowadzona przez&nbsp;Administratora w&nbsp;ramach prowadzonej działalności, w&nbsp;szczególności poprzez przedstawianie ofert handlowych Użytkownikowi
                                        w&nbsp;kontakcie telefonicznym.</li>
                                    <li><strong>Umożliwienia przesyłania przez&nbsp;Użytkownika komentarzy lub opinii.</strong><br /> Administrator wykorzystuje dane osobowe Użytkownika w&nbsp;celu umożliwienia mu komentowania/opiniowania działalności, usług
                                        lub produktów Administratora lub podmiotów z&nbsp;nim współpracujących.</li>
                                </ol>
                                <p>Administrator może przetwarzać dane osobowe Użytkownika podane w&nbsp;formularzu kontaktowym również w&nbsp;następujących celach:</p>
                                <ol >
                                    <li>w&nbsp;celu zawarcia i&nbsp;realizacji ewentualnej umowy pomiędzy Użytkownikiem a&nbsp;Administratorem oraz&nbsp;obsługi Użytkownika jako klienta Administratora zgodnie z&nbsp;art. 6 ust. 1 lit. b RODO;</li>
                                    <li>w&nbsp;celu prowadzenia rozliczeń finansowych z&nbsp;Użytkownikiem będącym klientem Administratora tytułem realizacji ewentualnej umowy zawartej między stronami, a&nbsp;także ewentualnego dochodzenia roszczeń od&nbsp;Użytkownika
                                        będącego klientem w&nbsp;ramach prawnie uzasadnionego interesu Administratora zgodnie z&nbsp;art. 6 ust. 1 lit. f RODO oraz&nbsp;spełnienia obowiązków prawnych Administratora wobec organów podatkowych na&nbsp;podstawie
                                        odrębnych przepisów zgodnie z&nbsp;art. 6 ust. 1 lit. cRODO;</li>
                                    <li>w&nbsp;celu realizacji działań marketingowych Administratora w&nbsp;ramach prawnie uzasadnionego interesu Administratora w&nbsp;rozumieniu art. 6 ust. 1 lit. f RODO, a&nbsp;także zgodnie z&nbsp;oświadczeniami woli
                                        dotyczącymi komunikacji marketingowej złożonymi wobec Administratora. Zgody udzielone w&nbsp;zakresie komunikacji marketingowej (np.&nbsp;na&nbsp;przesyłanie informacji handlowych drogą elektroniczną lub kontakt
                                        telefoniczny w&nbsp;celach marketingu bezpośredniego mogą być wycofane w&nbsp;dowolnym czasie, bez&nbsp;wpływu na&nbsp;zgodność z&nbsp;prawem przetwarzania, którego&nbsp;dokonano na&nbsp;podstawie zgody przed&nbsp;jej
                                        cofnięciem;
                                    </li>
                                    <li>w&nbsp;celu realizacji obowiązków prawnych Administratora wobec Użytkownika określonych w&nbsp;RODO, w&nbsp;rozumieniu art. 6 ust. 1 lit. c RODO.</li>
                                </ol>
                            </li>
                            <li><strong>UDOSTĘPNIANIE DANYCH OSOBOWYCH</strong><br /> Dane osobowe Użytkownika nie&nbsp;są przekazywane przez&nbsp;Administratora podmiotom trzecim.</li>
                            <li><strong>PRAWA UŻYTKOWNIKA</strong>
                                <ol >
                                    <li><strong>Prawa Użytkownika </strong><br /> Użytkownik na&nbsp;każdym etapie przetwarzania jego danych zapewniony ma szereg uprawnień pozwalających mu uzyskać dostęp do&nbsp;swoich danych, weryfikację prawidłowości przetwarzania
                                        danych, ich korektę, jak również ma prawo zgłoszenia sprzeciwu wobec ich przetwarzania, może żądać usunięcia danych, ograniczenia przetwarzania lub przeniesienia danych.
                                        <p></p>
                                        <p>W&nbsp;przypadku chęci skorzystania przez&nbsp;Użytkownika z&nbsp;przysługujących mu praw jako podmiotu danych osobowych, może on się skontaktować z&nbsp;Administratorem za&nbsp;pomocą następujących danych kontaktowych:
                                            <strong> VERDI MEBLE CEZARY PANEK, Waleriana Łukasińskiego 118 , 71-215 Szczecin, verdimeble@interia.pl.</strong></p>
                                    </li>
                                    <li><strong>Prawo wniesienia skargi do&nbsp;organu nadzorczego</strong><br /> Użytkownik, którego&nbsp;dane osobowe są przetwarzane przez&nbsp;Administratora ma prawo wnieść skargę do&nbsp;organu nadzoru właściwego w&nbsp;sprawach
                                        ochrony danych osobowych (Prezesa Urzędu Ochrony Danych Osobowych.</li>
                                </ol>
                            </li>
                            <li><strong>PLIKI COOKIES</strong>
                                <ol >
                                    <li>Administrator informuje, iż podczas korzystania z&nbsp;Serwisu w&nbsp;urządzeniu końcowym Użytkownika zapisywane są krótkie informacje tekstowe zwane „cookies”. Pliki „cookies” zawierają takie dane informatyczne jak:
                                        adres IP dotyczący Użytkownika, nazwa strony internetowej, z&nbsp;której&nbsp;pochodzą, czas przechowywania ich na&nbsp;urządzeniu końcowym Użytkownika, zapis parametrów i&nbsp;statystyki oraz&nbsp;unikalny numer.
                                        Pliki „cookies” są kierowane do&nbsp;serwera Serwisu za&nbsp;pośrednictwem przeglądarki internetowej zainstalowanej w&nbsp;urządzeniu końcowym Użytkownika.Pliki „cookies” wykorzystywane są w&nbsp;Serwisie w&nbsp;celu:
                                        <ol >
                                            <li>utrzymania technicznej poprawności i&nbsp;ciągłości sesji pomiędzy serwerem Serwisu, a&nbsp;urządzeniem końcowym Użytkownika;</li>
                                            <li>optymalizacji korzystania przez&nbsp;Użytkownika ze&nbsp;stron internetowych Serwisu i&nbsp;dostosowania sposobu ich wyświetlania na&nbsp;urządzeniu końcowym Użytkownika;</li>
                                            <li>zapewnienia bezpieczeństwa korzystania z&nbsp;Serwisu;</li>
                                            <li>zbierania statystyk odwiedzin stron Serwisu wspierających ulepszanie ich struktury i&nbsp;zawartości;</li>
                                            <li>wyświetlania na&nbsp;urządzeniu końcowym Użytkownika treści reklamowych optymalnie dostosowanych do&nbsp;jego preferencji.</li>
                                        </ol>
                                        <p>W&nbsp;ramach Serwisu stosowane są dwa rodzaje plików „cookies”: „sesyjne” oraz&nbsp;„stałe”. „Sesyjne” pliki „cookies” są plikami ulegającymi automatycznemu usunięciu z&nbsp;urządzenia końcowego Użytkownika Serwisu
                                            po&nbsp;jego wylogowaniu z&nbsp;Serwisu lub po&nbsp;opuszczeniu przez&nbsp;niego stron internetowych Serwisu lub po&nbsp;wyłączeniu przeglądarki internetowej. „Stałe” pliki „cookies” przechowywane są w&nbsp;urządzeniu
                                            końcowym Użytkownika przez&nbsp;czas określony w&nbsp;parametrach plików „cookies” lub do&nbsp;czasu ich usunięcia przez&nbsp;Użytkownika. „Stałe” pliki „cookies” instalowane są w&nbsp;urządzeniu końcowym Użytkownika
                                            wyłącznie za&nbsp;jego zgodą.</p>
                                        <p>Administrator informuje, że:</p>
                                        <ol >
                                            <li>przeglądarki internetowe domyślnie akceptują instalowanie plików „cookies” w&nbsp;urządzeniu końcowym Użytkownika. Każdy Użytkownik Serwisu może dokonać w&nbsp;dowolnym czasie zmiany ustawień dotyczących plików
                                                „cookies” w&nbsp;używanej przez&nbsp;niego przeglądarce internetowej w&nbsp;taki sposób, aby przeglądarka automatycznie blokowała obsługę plików „cookies”, bądź informowała Użytkownika o&nbsp;ich każdorazowym
                                                zamieszczeniu w&nbsp;jego urządzeniu końcowym. Szczegółowe informacje o&nbsp;możliwości i&nbsp;sposobach obsługi plików „cookies” dostępne są w&nbsp;ustawieniach przeglądarki internetowej stosowanej przez&nbsp;Użytkownika
                                                Serwisu.
                                            </li>
                                            <li>ograniczenie stosowania plików „cookies” przez&nbsp;Użytkownika może ujemnie wpłynąć na&nbsp;poprawność i&nbsp;ciągłość świadczenia Usług w&nbsp;Serwisie.</li>
                                        </ol>
                                        <p>Pliki „cookies” zainstalowane w&nbsp;urządzeniu końcowym Użytkownika Serwisu mogą być wykorzystywane przez&nbsp;współpracujących z&nbsp;Administratorem reklamodawców lub partnerów biznesowych.<br /> Pliki „cookies”
                                            można uznać za&nbsp;dane osobowe jedynie w&nbsp;powiązaniu z&nbsp;innymi danymi identyfikującymi tożsamość, udostępnionymi Administratorowi przez&nbsp;Użytkownika w&nbsp;ramach korzystania z&nbsp;Serwisu.<br /> Dostęp do&nbsp;plików „cookies” przetwarzanych przez&nbsp;serwer Serwisu posiada wyłącznie Administrator.<br /> Jeśli Użytkownik nie&nbsp;zgadza się na&nbsp;zapisywanie i&nbsp;odbieranie informacji w&nbsp;plikach
                                            „cookies”, może zmienić zasady dotyczące plików „cookies” za&nbsp;pomocą ustawień swojej przeglądarki internetowej.</p>
                                    </li>
                                </ol>
                            </li >
                            <li><strong>INNE WAŻNE INFORMACJE</strong>
                                <ol >
                                    <li><strong>Ochrona bezpieczeństwa danych osobowych</strong><br /> Administrator wprowadza odpowiednie środki mające na&nbsp;celu zapewnienie bezpieczeństwa danych osobowych Użytkownika. Bezpieczne korzystanie z&nbsp;Serwisu
                                        zapewniają stosowane systemy oraz&nbsp;procedury chroniące przed&nbsp;dostępem oraz&nbsp;ujawnieniem danych osobom niepożądanym. Ponadto stosowane przez&nbsp;Administratora systemy oraz&nbsp;procesy są regularnie
                                        monitorowane w&nbsp;celu wykrycia ewentualnych zagrożeń. Pozyskane przez&nbsp;Administratora dane osobowe przechowywane są w&nbsp;systemach komputerowych, do&nbsp;których&nbsp;dostęp jest ściśle ograniczony.</li>
                                    <li><strong>Przechowywanie danych osobowych</strong><br /> Okres przechowywania danych osobowych Użytkowników uzależniony jest od&nbsp;celów przetwarzania przez&nbsp;Administratora danych.<br /> Administrator przechowuje dane
                                        osobowe przez&nbsp;taki okres, jaki jest konieczny do&nbsp;osiągnięcia określonych celów, tj.:
                                        <p></p>
                                        <ul>
                                            <li>przez&nbsp;okres prowadzenia działalności gospodarczej przez&nbsp;Administratora.</li>
                                        </ul>
                                        <p>W&nbsp;każdym z&nbsp;powyższych przypadków, po&nbsp;upływie niezbędnego okresu przetwarzania, dane mogą być przetwarzane tylko&nbsp;w&nbsp;celu dochodzenia roszczeń na&nbsp;tle łączących strony relacji do&nbsp;czasu
                                            ostatecznego rozstrzygnięcia tych roszczeń na&nbsp;drodze prawnej.</p>
                                    </li>
                                    <li><strong>Zmiany Polityki prywatności</strong><br /> W celu uaktualnienia informacji zawartych w&nbsp;niniejszej Polityce prywatności oraz&nbsp;jej zgodności z&nbsp;obowiązującymi przepisami prawa, niniejsza Polityka prywatności
                                        może ulec zmianie. W&nbsp;przypadku zmiany treści Polityki prywatności, zmieniona zostanie data jej aktualizacji wskazana na&nbsp;końcu jej tekstu. W&nbsp;celu zasięgnięcia informacji o&nbsp;sposobie ochrony danych
                                        osobowych, Administrator rekomenduje Użytkownikom regularne zapoznawanie się z&nbsp;postanowieniami Polityki Prywatności.</li>
                                    <li><strong>Informacje kontaktowe</strong><br /> W celu uzyskania jakichkolwiek informacji dotyczących niniejszej Polityki Prywatności, Użytkownik może skontaktować się z&nbsp;Administratorem danych osobowych: <strong> VERDI MEBLE CEZARY PANEK, Waleriana Łukasińskiego 118 71-215 Szczecin, </strong> z&nbsp;wykorzystaniem następujących danych kontaktowych: <strong>verdimeble@interia.pl.</strong>
                                        <p></p>
                                        <p>Ponadto istnieje również możliwość kontaktu drogą pocztową pod&nbsp;adresem: <strong>Waleriana Łukasińskiego 118 71-215 Szczecin</strong>.</p>
                                    </li>
                                </ol>
                            </li>
                        </ol >
                        <p>Ostatnia aktualizacja niniejszego dokumentu miała miejsce dnia 21.05.2020.</p>
                    </div >
                </motion.div>
            </Flex >
        </>
    )
}

export default RegInside