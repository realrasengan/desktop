<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="en_US">
<context>
    <name>NetworkPage</name>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="198"/>
        <source>NetworkPage --- Choose which applications use the VPN.</source>
        <extracomment>Description for the split tunnel setting.</extracomment>
        <translation>Wybierz aplikacje korzystające z VPN.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="202"/>
        <source>NetworkPage --- Bypass VPN - App always connects directly to the Internet</source>
        <extracomment>Description for the &quot;Bypass VPN&quot; split tunnel mode that can be applied to a specific app. These apps do not use the VPN connection, they connect directly to the Internet.</extracomment>
        <translation>Omijaj VPN - Aplikacja zawsze łączy się bezpośrednio z internetem.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="206"/>
        <source>NetworkPage --- Only VPN - App can only connect when the VPN is connected</source>
        <extracomment>Description for the &quot;Only VPN&quot; split tunnel mode that can be applied to a specific app. These apps are only allowed to connect via the VPN, they are blocked if the VPN is not connected.</extracomment>
        <translation>Tylko VPN - aplikacja może się łączyć z interneten tylko przy włączonej VPN</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="212"/>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="307"/>
        <source>NetworkPage --- Split Tunnel</source>
        <translation>Podziel tunel</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="32"/>
        <source>NetworkPage --- Name Servers</source>
        <extracomment>Label for the setting that controls which DNS servers are used to look up domain names and translate them to IP addresses when browsing the internet. This setting is also present in OS network settings, so this string should preferably match whatever localized term the OS uses.</extracomment>
        <translation>Serwery nazw</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="69"/>
        <source>NetworkPage --- Warning: Using a third party DNS could compromise your privacy.</source>
        <translation>Ostrzeżenie: korzystanie z usług DNS innych firm może naruszyć Twoją prywatność.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="75"/>
        <source>NetworkPage --- Handshake is a decentralized naming protocol.  For more information, visit handshake.org.</source>
        <extracomment>&quot;Handshake&quot; is a brand name and should not be translated.</extracomment>
        <translation>Handshake jest zdecentralizowanym protokołem nazewnictwa.  Więcej informacji, znajdziesz, odwiedzając handshake.org.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="81"/>
        <source>NetworkPage --- PIA DNS</source>
        <translation>PIA DNS</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="84"/>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="136"/>
        <source>NetworkPage --- Use Existing DNS</source>
        <translation>Użyj istniejącego DNS</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="85"/>
        <source>NetworkPage --- Set Custom DNS...</source>
        <translation>Ustaw niestandardowy DNS...</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="97"/>
        <source>NetworkPage --- Proceed</source>
        <translation>Kontynuuj</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="98"/>
        <source>NetworkPage --- Cancel</source>
        <translation>Anuluj</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="107"/>
        <source>NetworkPage --- Primary DNS</source>
        <translation>Pierwotny DNS</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="114"/>
        <source>NetworkPage --- Secondary DNS (optional)</source>
        <translation>Wtórny DNS (opcjonalnie)</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="122"/>
        <source>NetworkPage --- &lt;b&gt;Warning:&lt;/b&gt; Using non-PIA DNS servers could expose your DNS traffic to third parties and compromise your privacy.</source>
        <translation>&lt;b&gt;Ostrzeżenie:&lt;/b&gt; korzystanie z serwerów DNS innych niż PIA może narazić Twój ruch w DNS na wgląd stron trzecich i narazić Twoją prywatność.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="127"/>
        <source>NetworkPage --- Set Custom DNS</source>
        <translation>Ustaw niestandardowy DNS</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="136"/>
        <source>NetworkPage --- Use Custom DNS</source>
        <translation>Użyj niestandardowego DNS</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="172"/>
        <source>NetworkPage --- Request Port Forwarding</source>
        <extracomment>Label for the setting that controls whether the application tries to forward a port from the public VPN IP to the user&apos;s computer. This feature is not guaranteed to work or be available, therefore we label it as &quot;requesting&quot; port forwarding.</extracomment>
        <translation>Żądaj przekierowania portów</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="179"/>
        <source>NetworkPage --- Forwards a port from the VPN IP to your computer. The port will be selected for you. Not all locations support port forwarding.</source>
        <extracomment>Tooltip for the port forwarding setting. The user can not choose which port to forward; a port will be automatically assigned by our servers. The user should further be made aware that only some of our servers support forwarding. The string contains embedded linebreaks to prevent it from being displayed too wide on the user&apos;s screen - such breaks should be preserved at roughly the same intervals.</extracomment>
        <translation>Przekierowuje port z adresu VPN IP do Twojego komputera. Port zostanie wybrany dla Ciebie. Nie wszystkie lokalizacje obsługują przekierowywanie portów.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="184"/>
        <source>NetworkPage --- Allow LAN Traffic</source>
        <translation>Zezwalaj na ruch LAN</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="185"/>
        <source>NetworkPage --- Always permits traffic between devices on your local network, even when using the VPN killswitch.</source>
        <translation>Zawsze zezwala na ruch między urządzeniami w sieci lokalnej, nawet przy użyciu wyłącznika awaryjnego VPN.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="440"/>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="445"/>
        <source>NetworkPage --- App Exclusions</source>
        <translation>Wykluczenia aplikacji</translation>
    </message>
    <message>
    <source>NetworkPage --- Excluded apps bypass the VPN and connect directly to the Internet.</source>
        <translation>Wykluczone aplikacje omijają sieć VPN i łączą się bezpośrednio z Internetem.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="238"/>
        <source>NetworkPage --- Approve the split tunnel extension to enable this feature.</source>
        <translation>Wykluczone aplikacje omijają sieć VPN i łączą się bezpośrednio z internetem.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="249"/>
        <source>NetworkPage --- Security Preferences</source>
        <translation>Preferencje zabezpieczeń</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="363"/>
        <source>NetworkPage --- Installing split tunnel filter...</source>
        <translation>Instalacja filtru podzielonych tuneli</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="372"/>
        <source>NetworkPage --- Enabling this feature will install the split tunnel filter.</source>
        <translation>Włączenie tej funkcji spowoduje instalację filtru podzielonych tuneli</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="379"/>
        <source>NetworkPage --- The split tunnel filter is not installed.  Reinstall it on the Help page.</source>
        <translation>Filtr podzielonych tuneli nie jest zainstalowany.  Zainstaluj go ponownie na stronie Pomocy.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/NetworkPage.qml" line="486"/>
        <source>NetworkPage --- Apps may need to be restarted for changes to be applied.</source>
        <translation>Aplikacje mogą wymagać ponownego uruchomienia   w celu zastosowania zmian.</translation>
    </message>
</context>
<context>
    <name>SplitTunnelDefaultRow</name>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelDefaultRow.qml" line="82"/>
        <source>SplitTunnelDefaultRow --- All Other Apps</source>
        <translation>Wszystkie pozostałe aplikacje</translation>
    </message>
</context>
<context>
    <name>SplitTunnelRowBase</name>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelRowBase.qml" line="23"/>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelRowBase.qml" line="27"/>
        <source>SplitTunnelRowBase --- Bypass VPN</source>
        <translation>Omijaj VPN</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelRowBase.qml" line="24"/>
        <source>SplitTunnelRowBase --- Only VPN</source>
        <translation>Tylko VPN</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelRowBase.qml" line="28"/>
        <source>SplitTunnelRowBase --- Use VPN</source>
        <translation>Używaj VPN</translation>
    </message>
</context>
<context>
    <name>SplitTunnelSettings</name>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelSettings.qml" line="293"/>
        <source>SplitTunnelSettings --- Behavior</source>
        <extracomment>Screen reader annotation for the column in the split tunnel app list that displays the behavior selected for a specific app.</extracomment>
        <translation>Zachowanie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelSettings.qml" line="55"/>
        <source>SplitTunnelSettings --- Applications</source>
        <translation>Aplikacje</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelSettings.qml" line="278"/>
        <source>SplitTunnelSettings --- App</source>
        <extracomment>Screen reader annotation for the column in the split tunnel app list that displays app names.</extracomment>
        <translation>Aplikacja</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelSettings.qml" line="286"/>
        <source>SplitTunnelSettings --- Path</source>
        <extracomment>Screen reader annotation for the column in the split tunnel app list that displays app file paths. (These are visually placed below the app names, but they&apos;re annotated as a separate column.)</extracomment>
        <translation>Ścieżka</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelSettings.qml" line="300"/>
        <source>SplitTunnelSettings --- Remove</source>
        <extracomment>Screen reader annotation for the column in the split tunnel app list that removes a selected app.</extracomment>
        <translation>Usuń</translation>
    </message>
</context>
<context>
    <name>AccountModule</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/AccountModule.qml" line="17"/>
        <source>AccountModule --- Subscription tile</source>
        <extracomment>Screen reader annotation for the &quot;Subscription&quot; tile, should reflect the name of the tile</extracomment>
        <translation>Płytka subskrypcji</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/AccountModule.qml" line="22"/>
        <source>AccountModule --- SUBSCRIPTION</source>
        <translation>SUBSKRYPCJA</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/AccountModule.qml" line="35"/>
        <source>AccountModule --- Subscription</source>
        <extracomment>Screen reader annotation for the subscription status display in the Subscription tile, usually the same as the tile name (but not all-caps)</extracomment>
        <translation>Subskrypcja</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/AccountModule.qml" line="39"/>
        <source>AccountModule --- Expired</source>
        <translation>Wygasł</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/AccountModule.qml" line="42"/>
        <source>AccountModule --- (%1 days left)</source>
        <translation>(%1 dni pozostało)</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/AccountModule.qml" line="58"/>
        <source>AccountModule --- Expired on</source>
        <translation>Wygasł w dniu</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/AccountModule.qml" line="58"/>
        <source>AccountModule --- Renews on</source>
        <translation>Zostanie odnowiony w dniu</translation>
    </message>
</context>
<context>
    <name>AccountPage</name>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/AccountPage.qml" line="24"/>
        <source>AccountPage --- Username</source>
        <translation>Nazwa użytkownika</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/AccountPage.qml" line="44"/>
        <source>AccountPage --- Subscription</source>
        <translation>Subskrypcja</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/AccountPage.qml" line="54"/>
        <source>AccountPage --- Expired</source>
        <translation>Wygasł</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/AccountPage.qml" line="61"/>
        <source>AccountPage --- (expired on %1)</source>
        <translation>(wygasł w dniu %1)</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/AccountPage.qml" line="63"/>
        <source>AccountPage --- (renews on %1)</source>
        <translation>(zostanie odnowiona w dniu %1)</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/AccountPage.qml" line="65"/>
        <source>AccountPage --- (expires on %1)</source>
        <translation>(wygasa w dniu %1)</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/AccountPage.qml" line="80"/>
        <source>AccountPage --- Renews in %1 days</source>
        <translation>Zostanie odnowiony za %1 dni</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/AccountPage.qml" line="80"/>
        <source>AccountPage --- Expires in %1 days</source>
        <translation>Wygasa za %1 dzień</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/AccountPage.qml" line="85"/>
        <source>AccountPage --- Purchase Subscription</source>
        <translation>Kup subskrypcję</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/AccountPage.qml" line="85"/>
        <source>AccountPage --- Manage Subscription</source>
        <translation>Zarządzaj subskrypcją</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/AccountPage.qml" line="85"/>
        <source>AccountPage --- Renew Subscription</source>
        <translation>Odnów subskrypcję</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/AccountPage.qml" line="98"/>
        <source>AccountPage --- Manage My Account</source>
        <translation>Zarządzanie moim kontem</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/AccountPage.qml" line="103"/>
        <source>AccountPage --- Logout / Switch Account</source>
        <translation>Wyloguj się / Przełącz konto</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/AccountPage.qml" line="116"/>
        <source>AccountPage --- Not logged in</source>
        <translation>Nie zalogowany</translation>
    </message>
</context>
<context>
    <name>BelowFold</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/SeparatorModule.qml" line="19"/>
        <source>BelowFold --- DEFAULT DISPLAY</source>
        <translation>WYŚWIETL DOMYŚLNE</translation>
    </message>
</context>
<context>
    <name>BetaAgreementDialog</name>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/BetaAgreementDialog.qml" line="15"/>
        <source>BetaAgreementDialog --- Agreement</source>
        <translation>Umowa</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/BetaAgreementDialog.qml" line="19"/>
        <source>BetaAgreementDialog --- Accept</source>
        <extracomment>&quot;Accept&quot; button for accepting the Beta agreement, should use the typical terminology for accepting a legal agreement.</extracomment>
        <translation>Zaakceptuj</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/BetaAgreementDialog.qml" line="22"/>
        <source>BetaAgreementDialog --- Decline</source>
        <extracomment>&quot;Decline&quot; button for declining the Beta agreement, should use the typical terminology for declining a legal agreement.</extracomment>
        <translation>Odrzuć</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/BetaAgreementDialog.qml" line="62"/>
        <source>BetaAgreementDialog --- Agreement text</source>
        <extracomment>Screen reader annotation for the beta license agreement content (a text element containing the license agreement).</extracomment>
        <translation>Tekst umowy</translation>
    </message>
</context>
<context>
    <name>ChangelogWindow</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/ChangelogWindow.qml" line="16"/>
        <source>ChangelogWindow --- Changelog</source>
        <translation>Dziennik zmian</translation>
    </message>
</context>
<context>
    <name>Client</name>
    <message>
        <location filename="../../../../../client/res/components/client/Client.qml" line="127"/>
        <source>Client --- %1 - Best</source>
        <extracomment>Text that indicates the best (lowest ping) region is being used for a given country. The %1 placeholder contains the name of the country, e.g &quot;UNITED STATES - BEST&quot;</extracomment>
        <translation>%1 - Najlepsze</translation>
    </message>
</context>
<context>
    <name>ClientNotifications</name>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="35"/>
        <source>ClientNotifications -- header-title --- ERROR</source>
        <comment>header-title</comment>
        <extracomment>Header bar title used for all &quot;error&quot; statuses - serious installation problems, etc. This means that there is currently an error condition active now.</extracomment>
        <translation>BŁĄD</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="51"/>
        <source>ClientNotifications --- UPDATE FAILED</source>
        <translation>AKTUALIZACJA NIE POWIODŁA SIĘ</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="52"/>
        <source>ClientNotifications --- Download of version %1 failed.</source>
        <translation>Pobieranie wersji %1 nie powiodło się.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="71"/>
        <source>ClientNotifications --- The virtual network adapter is not installed.</source>
        <translation>Sterownik wirtualnej karty sieciowej nie jest zainstalowany.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="74"/>
        <source>ClientNotifications --- The TAP adapter for the VPN tunnel is not installed.  You can reinstall it from Settings.</source>
        <extracomment>&quot;TAP&quot; is the type of virtual network adapter used on Windows and is not generally localized.</extracomment>
        <translation>Sterownik TAP do tunelu VPN nie jest zainstalowany.  Możesz go ponownie zainstalować z poziomu Ustawień.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="78"/>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="135"/>
        <source>ClientNotifications --- Reinstall</source>
        <translation>Zainstaluj ponownie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="111"/>
        <source>ClientNotifications --- Restart to complete installation.</source>
        <translation>Uruchom ponownie, aby zakończyć instalację.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="112"/>
        <source>ClientNotifications --- The system must be restarted before you can connect.</source>
        <translation>System należy uruchomić ponownie przed nawiązaniem połączenia.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="123"/>
        <source>ClientNotifications --- The split tunnel filter is not installed.</source>
        <translation>Filtr podzielonych tuneli nie jest zainstalowany.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="124"/>
        <source>ClientNotifications --- The App Exclusion feature requires the split tunnel filter.  Reinstall it from Settings.</source>
        <translation>Funkcja App Exclusion (Wykluczenie aplikacji) wymaga filtru podzielonych tuneli.  Ponownie zainstaluj go w Ustawieniach.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="149"/>
        <source>ClientNotifications --- The App Exclusion feature requires the split tunnel filter.  Restart to finish installation.</source>
        <translation>Funkcja App Exclusion (Wykluczenie aplikacji) wymaga filtru podzielonych tuneli.  Uruchom ponownie, aby zakończyć instalację.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="164"/>
        <source>ClientNotifications --- Connection refused.</source>
        <translation>Odmowa połączenia.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="170"/>
        <source>ClientNotifications --- The server refused the connection.  Please check your username and password, and verify that your account is not expired.</source>
        <extracomment>This error could be caused by incorrect credentials or an expired account, but it could have other causes too. The message should suggest checking those things without implying that they&apos;re necessarily the cause (to avoid frustrating users who are sure their account is current).</extracomment>
        <translation>Serwer odmówił połączenia.  Sprawdź nazwę użytkownika i hasło oraz ważność konta.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="179"/>
        <source>ClientNotifications --- Could not configure DNS.</source>
        <translation>Nie udało się sskonfigurować DNS.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="180"/>
        <source>ClientNotifications --- Enable debug logging and check the daemon log for specific details.</source>
        <translation>Włącz logowanie z debugowaniemm i sprawdź szczegółowe informacje w dzienniku programu Daemon</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="183"/>
        <source>ClientNotifications --- Daemon Log</source>
        <translation>dziennik programu Daemon</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="185"/>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="217"/>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="276"/>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="331"/>
        <source>ClientNotifications --- Settings</source>
        <translation>Ustawienia</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="193"/>
        <source>ClientNotifications --- Failed to run /usr/bin/xdg-open.  Please open the daemon log file from:</source>
        <translation>nie udało się uruchomić  /usr/bin/xdg-open.  Otwórz dziennik programu Daemon z:</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="210"/>
        <source>ClientNotifications --- Can&apos;t connect to Handshake.</source>
        <extracomment>Indicates that we can&apos;t connect to the Handshake name-resolution network. &quot;Handshake&quot; is a brand name and should be left as-is.</extracomment>
        <translation>Nie można połączyć z Handshake</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="214"/>
        <source>ClientNotifications --- Can&apos;t set up name resolution with Handshake.  Continue waiting, or try a different Name Server setting.</source>
        <extracomment>Detailed message about failure to connect to the Handshake name- resolution network. &quot;Handshake&quot; is a brand name and should be left as-is.</extracomment>
        <translation>Nie można ustawić rozpoznawalności nazwy w Handshake.   Kontynuuj oczekiwanie lub wypróbuj inne ustawienie serwera nazw.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="228"/>
        <source>ClientNotifications --- Running PIA as administrator is not recommended.</source>
        <translation>Nie zalecamy uruchamiania PIA w roli administratora.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="229"/>
        <source>ClientNotifications --- Running PIA as administrator can prevent Launch on System Startup from working and may cause other problems.</source>
        <translation>Uruchamianie PIA w roli administratora może uniemożliwić rozruch systemu przy starcie i spowodować inne problemy.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="241"/>
        <source>ClientNotifications --- KILLSWITCH ENABLED</source>
        <translation>WŁĄCZONO AWARYJNE WYŁĄCZENIE</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="242"/>
        <source>ClientNotifications --- Killswitch is enabled.</source>
        <translation>Włączono awaryjne wyłączenie.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="243"/>
        <source>ClientNotifications --- Access to the Internet is blocked because the killswitch feature is enabled in Settings.</source>
        <translation>Dostęp do internetu jest zablokowany, ponieważ funkcja awaryjnego wyłączania jest włączona w Ustawieniach.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="246"/>
        <source>ClientNotifications --- Change</source>
        <translation>Zmień</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="259"/>
        <source>ClientNotifications --- RECONNECTING...</source>
        <translation>PONOWNE ŁĄCZENIE...</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="260"/>
        <source>ClientNotifications --- The connection to the VPN server was lost.</source>
        <translation>Utracono połączenie z serwerem VPN.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="269"/>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="287"/>
        <source>ClientNotifications --- CONNECTING...</source>
        <translation>ŁĄCZENIE...</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="272"/>
        <source>ClientNotifications --- Can&apos;t connect to the proxy.</source>
        <extracomment>Warning message used when the app is currently trying to connect to a proxy, but the proxy can&apos;t be reached.</extracomment>
        <translation>Nie możemy się połączyć z serwerem proxy.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="273"/>
        <source>ClientNotifications --- The proxy can&apos;t be reached.  Check your proxy settings, and check that the proxy is available.</source>
        <translation>Proxy nie jest dostępny.  Sprawdź jego ustawienia i upewnij się, czy jest dostępny.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="288"/>
        <source>ClientNotifications --- Can&apos;t reach the VPN server.  Please check your connection.</source>
        <translation>Nie można połączyć z serwerem VPN. Sprawdź połączenie.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="297"/>
        <source>ClientNotifications --- RECONNECT NEEDED</source>
        <translation>WYMAGANE PONOWNE POŁĄCZENIE</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="298"/>
        <source>ClientNotifications --- Reconnect to apply settings.</source>
        <translation>Połącz ponownie, aby zastosować ustawienia.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="299"/>
        <source>ClientNotifications --- Some settings changes won&apos;t take effect until the next time you connect. Click to reconnect now.</source>
        <translation>Niektóre zmiany ustawień zostaną zastosowane dopiero przy następnym połączeniu. Kliknij, aby połączyć ponownie teraz.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="319"/>
        <source>ClientNotifications --- Connected using %1 port %2.</source>
        <extracomment>Message when the client automatically uses a transport other than the user&apos;s chosen transport (because the user&apos;s settings did not work). &quot;Connected&quot; means the client is currently connected right now using this setting. %1 is the protocol used (&quot;UDP&quot; or &quot;TCP&quot;), and %2 is the port number. For example: &quot;UDP port 8080&quot; or &quot;TCP port 443&quot;.</extracomment>
        <translation>Ustanowiono połączenie %1 port %2.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="326"/>
        <source>ClientNotifications --- Try Alternate Settings is enabled.  The server could not be reached on %1 port %2, so %3 port %4 was used instead.</source>
        <extracomment>Detailed message when the client automatically uses an alternate transport. &quot;%1 port %2&quot; refers to the chosen transport, and &quot;%3 port %4&quot; refers to the actual transport; for example &quot;TCP port 443&quot; or &quot;UDP port 8080&quot;. The &quot;Try Alternate Settings&quot; setting is on the Connection page.</extracomment>
        <translation>Próba użycia alternatywnych ustawień jest włączona. Nie udało się ustanowić poczenia %1 port %2, w to miejsce użyto więc %3 port %4.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="340"/>
        <source>ClientNotifications --- Subscription expires in %1 days.</source>
        <translation>Subskrypcja wygasa za %1 dni.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="343"/>
        <source>ClientNotifications --- Renew</source>
        <translation>Odnów</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="357"/>
        <source>ClientNotifications --- Unable to reach login server.</source>
        <extracomment>Dashboard notification for being unable to reach our main API server in order to authenticate the user&apos;s account. The phrase should convey that the problem is network related and that we are merely offline or &quot;out of touch&quot; rather than there being any account problem.</extracomment>
        <translation>Nie można się połączyć z serwerem logowania</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="361"/>
        <source>ClientNotifications --- Your account details are unavailable, but you may still be able to connect to the VPN.</source>
        <extracomment>Infotip to explain to the user that a login authentication failure is not necessarily a critical problem, but that the app will have reduced functionality until this works.</extracomment>
        <translation>Informacje szczegółowe konta są niedostępne, ale połączenie z VPN może nadal być możliwe.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="365"/>
        <source>ClientNotifications --- Retry</source>
        <translation>Ponów</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="373"/>
        <source>ClientNotifications --- Private Internet Access was updated.</source>
        <translation>Private Internet Access został zaktualizowany.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="376"/>
        <source>ClientNotifications --- See what&apos;s new</source>
        <translation>Zobacz, co nowego</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ClientNotifications.qml" line="393"/>
        <source>ClientNotifications --- The application quit unexpectedly. Your VPN connection was preserved.</source>
        <extracomment>Indicates that Private Internet Access had previously crashed or otherwise stopped unexpectedly - shown the next time the user starts the app.</extracomment>
        <translation>Aplikacja niespodziewanie zakończyła pracę. Połączenie z VPN zostało zachowane.</translation>
    </message>
</context>
<context>
    <name>ConnectButton</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/ConnectButton.qml" line="93"/>
        <source>ConnectButton --- Toggle connection</source>
        <extracomment>Screen reader annotation for the Connect button (the large &quot;power symbol&quot; button). Used for all states of the Connect button.</extracomment>
        <translation>Przełącznik połączenia</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/ConnectButton.qml" line="99"/>
        <source>ConnectButton --- Resume from Snooze and reconnect, currently snoozing and disconnected</source>
        <extracomment>Description of the Connect button when connection is &quot;Snoozed&quot; meaning the connection is temporarily disconnected</extracomment>
        <translation>Wznów z Drzemki i połącz ponownie, teraz drzemka i rozłączenie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/ConnectButton.qml" line="106"/>
        <source>ConnectButton --- Connect to VPN, error has occurred</source>
        <extracomment>Description of the Connect button in the &quot;error&quot; state. This indicates that an error occurred recently.</extracomment>
        <translation>Połącz z VPN, wystąpił błąd</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/ConnectButton.qml" line="110"/>
        <source>ConnectButton --- Connect to VPN</source>
        <extracomment>Description of the Connect button in the normal &quot;disconnected&quot; state</extracomment>
        <translation>Połącz z VPN</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/ConnectButton.qml" line="115"/>
        <source>ConnectButton --- Disconnect from VPN, connecting</source>
        <extracomment>Description of the Connect button when a connection is ongoing (clicking the button in this state disconnects, i.e. aborts the ongoing connection)</extracomment>
        <translation>Odłącz od VPN, Łączenie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/ConnectButton.qml" line="118"/>
        <source>ConnectButton --- Disconnect from VPN</source>
        <extracomment>Description of the Connect button in the normal &quot;connected&quot; state</extracomment>
        <translation>Odłącz od VPN</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/ConnectButton.qml" line="123"/>
        <source>ConnectButton --- Disconnect from VPN, disconnecting</source>
        <extracomment>Description of the Connect button while currently disconnecting. Clicking the button in this state still tries to disconnect (which has no real effect since it is already disconnecting).</extracomment>
        <translation>Odłącz od VPN, rozłączanie</translation>
    </message>
</context>
<context>
    <name>ConnectPage</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/ConnectPage.qml" line="80"/>
        <source>ConnectPage --- Connect page</source>
        <extracomment>Screen reader annotation for Connect page. This describes the entire page that contains the Connect button and tiles.</extracomment>
        <translation>Strona łączenia</translation>
    </message>
</context>
<context>
    <name>ConnectionPage</name>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="26"/>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="196"/>
        <source>ConnectionPage --- Default</source>
        <translation>Domyślnie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="60"/>
        <source>ConnectionPage --- Connection Type</source>
        <translation>Typ połączenia</translation>
    </message>
    <message>
    <source>ConnectionPage --- The Shadowsocks proxy setting requires TCP.</source>
        <translation>Konfiguracja serwera procy Shadowsocks proxy wymaga TCP.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="72"/>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="77"/>
        <source>ConnectionPage --- Remote Port</source>
        <translation>Port zdalny</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="83"/>
        <source>ConnectionPage --- Local Port</source>
        <translation>Port lokalny</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="95"/>
        <source>ConnectionPage --- Auto</source>
        <translation>Automatycznie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="292"/>
        <source>ConnectionPage --- Configuration Method</source>
        <translation>Metoda konfiguracji</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="299"/>
        <source>ConnectionPage --- DHCP</source>
        <extracomment>&quot;DHCP&quot; refers to Dynamic Host Configuration Protocol, a network configuration technology. This probably is not translated for most languages.</extracomment>
        <translation>DHCP</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="303"/>
        <source>ConnectionPage --- Static</source>
        <extracomment>&quot;Static&quot; is an alternative to DHCP - instead of using dynamic configuration on the network adapter, it is configured with static addresses.</extracomment>
        <translation>Statyczna</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="308"/>
        <source>ConnectionPage --- Determines how addresses are configured on the TAP adapter.  If you have trouble connecting, a different method may be more reliable.</source>
        <extracomment>Description of the configuration method choices for Windows. This should suggest that the only reason to change this setting is if you have trouble connecting.</extracomment>
        <translation>Określa sposób konfiguracji adresów w adapterze TAP.  W przypadku problemów z połączeniem, inna metoda może okazać się bardziej niezawodna.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="244"/>
        <source>ConnectionPage --- Data Encryption</source>
        <translation>Szyfrowanie danych</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="116"/>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="251"/>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="265"/>
        <source>ConnectionPage --- None</source>
        <translation>Brak</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="253"/>
        <source>ConnectionPage --- Warning: Your traffic is sent unencrypted and is vulnerable to eavesdropping.</source>
        <translation>Ostrzeżenie: Twoje dane są przesyłane w formie niezaszyfrowanej i mogą zostać przechwycone przez inne osoby.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="260"/>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="270"/>
        <source>ConnectionPage --- Data Authentication</source>
        <translation>Uwierzytelnianie danych</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="267"/>
        <source>ConnectionPage --- Warning: Your traffic is unauthenticated and is vulnerable to manipulation.</source>
        <translation>Ostrzeżenie: Twoje przesyłane dane są nieuwierzytelnione i mogą zostać zmanipulowane.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="279"/>
        <source>ConnectionPage --- Handshake</source>
        <translation>Handshake</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="289"/>
        <source>ConnectionPage --- This handshake relies on an Elliptic Curve endorsed by US standards bodies.</source>
        <translation>Uzgadnianie danych Handshake opiera się na krzywej eliptycznej, wspieranej przez amerykańskie władze normalizacyjne.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="319"/>
        <source>ConnectionPage --- Use Small Packets</source>
        <translation>Używaj małych pakietów</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="323"/>
        <source>ConnectionPage --- Set a smaller MTU for the VPN connection. This can result in lower transfer speeds but improved reliability on poor connections.</source>
        <translation>Ustaw mniejsze MTU dla połączenia VPN. Może to spowodować niższą prędkość połączenia, ale zwiększy niezawodność w przypadku słabych połączeń.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="327"/>
        <source>ConnectionPage --- Try Alternate Settings</source>
        <translation>Wypróbuj ustawienia alternatywne</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="336"/>
        <source>ConnectionPage --- If the connection type and remote port above do not work, try other settings automatically.</source>
        <extracomment>Tip for the automatic transport setting. Refers to the &quot;Connection Type&quot; and &quot;Remote Port&quot; settings above on the Connection page.</extracomment>
        <translation>Jeśli rodzaj połączenia i powyższy zdalny port nie zadziałają, automatycznie wypróbuj inne ustawienia.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="344"/>
        <source>ConnectionPage --- Alternate settings can&apos;t be used when a proxy is configured.</source>
        <extracomment>Tip used for the automatic transport setting when a proxy is configured - the two settings can&apos;t be used together.</extracomment>
        <translation>Nie można używać ustawień alternatywnych po skonfigurowaniu serwera proxy.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="357"/>
        <source>ConnectionPage --- What do these settings mean?</source>
        <translation>Co oznaczają te ustawienia?</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="99"/>
        <source>ConnectionPage --- Proxy</source>
        <translation>Proxy</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="119"/>
        <source>ConnectionPage --- SOCKS5 Proxy...</source>
        <translation>Serwer proxy SOCKS5</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="150"/>
        <source>ConnectionPage --- SOCKS5 Proxy</source>
        <translation>Serwer proxy SOCKS5</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="174"/>
        <source>ConnectionPage --- Server</source>
        <translation>Serwer</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="178"/>
        <source>ConnectionPage --- Server IP Address</source>
        <extracomment>The IP address of the SOCKS proxy server to use when connecting. Labeled with &quot;IP Address&quot; to indicate that it can&apos;t be a hostname.</extracomment>
        <translation>Adres IP serwera</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="193"/>
        <source>ConnectionPage --- Port</source>
        <translation>Port</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="202"/>
        <source>ConnectionPage --- User (optional)</source>
        <translation>Użytkownik (opcjonalnie)</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/ConnectionPage.qml" line="209"/>
        <source>ConnectionPage --- Password (optional)</source>
        <translation>Hasło (opcjonalnie)</translation>
    </message>
</context>
<context>
    <name>DaemonAccount</name>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonAccount.qml" line="28"/>
        <source>DaemonAccount --- Deactivated</source>
        <translation>Dezaktywowany</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonAccount.qml" line="30"/>
        <source>DaemonAccount --- One Month Plan</source>
        <translation>Plan jednomiesięczny</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonAccount.qml" line="31"/>
        <source>DaemonAccount --- Three Month Plan</source>
        <translation>Plan trzymiesięczny</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonAccount.qml" line="32"/>
        <source>DaemonAccount --- Six Month Plan</source>
        <translation>Plan sześciomiesięczny</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonAccount.qml" line="33"/>
        <source>DaemonAccount --- One Year Plan</source>
        <translation>Plan jednoroczny</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonAccount.qml" line="34"/>
        <source>DaemonAccount --- Two Year Plan</source>
        <translation>Plan dwuletni</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonAccount.qml" line="35"/>
        <source>DaemonAccount --- Three Year Plan</source>
        <translation>Plan trzyletni</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonAccount.qml" line="36"/>
        <source>DaemonAccount --- Trial</source>
        <translation>Okres próbny</translation>
    </message>
</context>
<context>
    <name>DaemonData</name>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="36"/>
        <source>DaemonData --- UAE</source>
        <translation>ZEA</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="37"/>
        <source>DaemonData --- AU Sydney</source>
        <translation>AU Sydney</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="38"/>
        <source>DaemonData --- AU Melbourne</source>
        <translation>AU Melbourne</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="39"/>
        <source>DaemonData --- AU Perth</source>
        <translation>AU Perth</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="40"/>
        <source>DaemonData --- Austria</source>
        <translation>Austria</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="41"/>
        <source>DaemonData --- Belgium</source>
        <translation>Belgia</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="42"/>
        <source>DaemonData --- Brazil</source>
        <translation>Brazylia</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="43"/>
        <source>DaemonData --- CA Montreal</source>
        <translation>CA Montreal</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="44"/>
        <source>DaemonData --- CA Toronto</source>
        <translation>CA Toronto</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="45"/>
        <source>DaemonData --- CA Vancouver</source>
        <translation>CA Vancouver</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="46"/>
        <source>DaemonData --- Czech Republic</source>
        <translation>Czechy</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="47"/>
        <source>DaemonData --- DE Berlin</source>
        <translation>DE Berlin</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="48"/>
        <source>DaemonData --- Denmark</source>
        <translation>Dania</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="49"/>
        <source>DaemonData --- Finland</source>
        <translation>Finlandia</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="50"/>
        <source>DaemonData --- France</source>
        <translation>Francja</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="51"/>
        <source>DaemonData --- DE Frankfurt</source>
        <translation>DE Frankfurt</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="52"/>
        <source>DaemonData --- Hong Kong</source>
        <translation>Hongkong</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="53"/>
        <source>DaemonData --- Hungary</source>
        <translation>Węgry</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="54"/>
        <source>DaemonData --- India</source>
        <translation>Indie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="55"/>
        <source>DaemonData --- Ireland</source>
        <translation>Irlandia</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="56"/>
        <source>DaemonData --- Israel</source>
        <translation>Izrael</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="57"/>
        <source>DaemonData --- Italy</source>
        <translation>Włochy</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="58"/>
        <source>DaemonData --- Japan</source>
        <translation>Japonia</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="59"/>
        <source>DaemonData --- Luxembourg</source>
        <translation>Luksemburg</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="60"/>
        <source>DaemonData --- Mexico</source>
        <translation>Meksyk</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="61"/>
        <source>DaemonData --- Netherlands</source>
        <translation>Holandia</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="62"/>
        <source>DaemonData --- Norway</source>
        <translation>Norwegia</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="63"/>
        <source>DaemonData --- New Zealand</source>
        <translation>Nowa Zelandia</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="64"/>
        <source>DaemonData --- Poland</source>
        <translation>Polska</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="65"/>
        <source>DaemonData --- Romania</source>
        <translation>Rumunia</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="66"/>
        <source>DaemonData --- Singapore</source>
        <translation>Singapur</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="67"/>
        <source>DaemonData --- Spain</source>
        <translation>Hiszpania</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="68"/>
        <source>DaemonData --- Sweden</source>
        <translation>Szwecja</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="69"/>
        <source>DaemonData --- Switzerland</source>
        <translation>Szwajcaria</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="70"/>
        <source>DaemonData --- Turkey</source>
        <translation>Turcja</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="71"/>
        <source>DaemonData --- UK London</source>
        <translation>WB Londyn</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="72"/>
        <source>DaemonData --- UK Manchester</source>
        <translation>WB Manchester</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="73"/>
        <source>DaemonData --- UK Southampton</source>
        <translation>WB Southampton</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="74"/>
        <source>DaemonData --- US East</source>
        <translation>USA Stany Wschodnie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="75"/>
        <source>DaemonData --- US West</source>
        <translation>USA Stany Zachodnie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="76"/>
        <source>DaemonData --- US Atlanta</source>
        <translation>USA Atlanta</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="77"/>
        <source>DaemonData --- US California</source>
        <translation>USA Kalifornia</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="78"/>
        <source>DaemonData --- US Chicago</source>
        <translation>USA Chicago</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="79"/>
        <source>DaemonData --- US Denver</source>
        <translation>USA Denver</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="80"/>
        <source>DaemonData --- US Florida</source>
        <translation>USA Floryda</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="81"/>
        <source>DaemonData --- US Houston</source>
        <translation>USA Houston</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="82"/>
        <source>DaemonData --- US Las Vegas</source>
        <translation>USA Las Vegas</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="83"/>
        <source>DaemonData --- US New York City</source>
        <translation>USA Nowy Jork</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="84"/>
        <source>DaemonData --- US Seattle</source>
        <translation>USA Seattle</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="85"/>
        <source>DaemonData --- US Silicon Valley</source>
        <translation>USA Dolina Krzemowa</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="86"/>
        <source>DaemonData --- US Texas</source>
        <translation>USA Teksas</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="87"/>
        <source>DaemonData --- US Washington DC</source>
        <translation>USA Waszyngton, DC</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="88"/>
        <source>DaemonData --- South Africa</source>
        <translation>Republika Południowej Afryki</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="94"/>
        <source>DaemonData --- Germany</source>
        <translation>Niemcy</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="95"/>
        <source>DaemonData --- Canada</source>
        <translation>Kanada</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="96"/>
        <source>DaemonData --- United States</source>
        <translation>Stany Zjednoczone</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="97"/>
        <source>DaemonData --- Australia</source>
        <translation>Australia</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/daemon/DaemonData.qml" line="98"/>
        <source>DaemonData --- United Kingdom</source>
        <translation>Wielka Brytania</translation>
    </message>
</context>
<context>
    <name>DashboardPopup</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/DashboardPopup.qml" line="78"/>
        <source>DashboardPopup --- PIA Dashboard</source>
        <extracomment>Title of the dashboard window (the main UI that users interact with. This isn&apos;t normally shown, but it is used by screen readers, and it is occasionally used by tools on Windows that list open application windows. &quot;PIA&quot; stands for Private Internet Access. We refer to this window as the &quot;dashboard&quot;, but this term doesn&apos;t currently appear elsewhere in the product.</extracomment>
        <translation>Pulpit PIA</translation>
    </message>
</context>
<context>
    <name>DashboardWindow</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/DashboardWindow.qml" line="55"/>
        <source>DashboardWindow --- Connect</source>
        <translation>Połącz</translation>
    </message>
</context>
<context>
    <name>DialogMessage</name>
    <message>
        <location filename="../../../../../client/res/components/common/DialogMessage.qml" line="28"/>
        <source>DialogMessage --- Information</source>
        <extracomment>Screen reader annotation for the &quot;info&quot; icon in dialog messages</extracomment>
        <translation>Informacje</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/DialogMessage.qml" line="30"/>
        <source>DialogMessage --- Warning</source>
        <extracomment>Screen reader annotation for the &quot;warning&quot; icon in dialog messages</extracomment>
        <translation>Ostrzeżenie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/DialogMessage.qml" line="32"/>
        <source>DialogMessage --- Error</source>
        <extracomment>Screen reader annotation for the &quot;error&quot; icon in dialog messages</extracomment>
        <translation>Błąd</translation>
    </message>
</context>
<context>
    <name>Error</name>
    <message>
        <location filename="../../../../../common/src/builtin/error.cpp" line="36"/>
        <source>Error --- Unknown error</source>
        <translation>Nieznany błąd</translation>
    </message>
    <message>
        <location filename="../../../../../common/src/builtin/error.cpp" line="37"/>
        <source>Error --- System error %1: %2</source>
        <translation>Błąd systemowy %1: %2</translation>
    </message>
    <message>
        <location filename="../../../../../common/src/builtin/error.cpp" line="37"/>
        <source>Error --- System error %1 inside %3: %2</source>
        <translation>Błąd systemowy %1 w %3: %2</translation>
    </message>
    <message>
        <location filename="../../../../../common/src/builtin/error.cpp" line="38"/>
        <source>Error --- Unknown error code %1</source>
        <translation>Nieznany kod błędu %1</translation>
    </message>
    <message>
        <location filename="../../../../../common/src/builtin/error.cpp" line="46"/>
        <source>Error --- No additional information available.</source>
        <translation>Brak dostępnych dodatkowych informacji.</translation>
    </message>
</context>
<context>
    <name>ExpandButton</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/ExpandButton.qml" line="71"/>
        <source>ExpandButton --- Collapse</source>
        <extracomment>Screen reader annotations for the Expand button at the bottom of the Connect page, which either expands or collapses the dashboard to show/hide the extra tiles. This title should be a brief name (typically one or two words) of the action that the button will take.</extracomment>
        <translation>Zwiń</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/ExpandButton.qml" line="71"/>
        <source>ExpandButton --- Expand</source>
        <translation>Rozwiń</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/ExpandButton.qml" line="77"/>
        <source>ExpandButton --- Hide extra tiles</source>
        <extracomment>Screen reader annotations for the Expand button at the bottom of the Connect page, which either expands or collapses the dashboard to show/hide the extra tiles. This title should be a short description (typically a few words) indicating that the button will show or hide the extra tiles.</extracomment>
        <translation>Ukryj dodatkowe płytki</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/ExpandButton.qml" line="77"/>
        <source>ExpandButton --- Show extra tiles</source>
        <translation>Pokaż dodatkowe płytki</translation>
    </message>
</context>
<context>
    <name>GeneralPage</name>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/GeneralPage.qml" line="21"/>
        <source>GeneralPage --- Launch on System Startup</source>
        <translation>Uruchom przy starcie systemu</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/GeneralPage.qml" line="40"/>
        <source>GeneralPage --- Connect on Launch</source>
        <translation>Połącz przy uruchomieniu</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/GeneralPage.qml" line="44"/>
        <source>GeneralPage --- Show Desktop Notifications</source>
        <translation>Pokaż powiadomienia na pulpicie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/GeneralPage.qml" line="49"/>
        <source>GeneralPage --- Language</source>
        <translation>Język</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/GeneralPage.qml" line="65"/>
        <source>GeneralPage --- Theme</source>
        <translation>Motyw</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/GeneralPage.qml" line="68"/>
        <source>GeneralPage --- Dark</source>
        <translation>Ciemny</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/GeneralPage.qml" line="69"/>
        <source>GeneralPage --- Light</source>
        <translation>Jasny</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/GeneralPage.qml" line="76"/>
        <source>GeneralPage --- Tray Icon Style</source>
        <extracomment>This setting allows the user to choose a style for the icon shown in the system tray / notification area. It should use the typical desktop terminology for the &quot;tray&quot;.</extracomment>
        <translation>Styl ikony zasobnika</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/GeneralPage.qml" line="81"/>
        <source>GeneralPage --- The &apos;Auto&apos; setting chooses an icon based on your desktop theme.</source>
        <translation>Funkcja ustawień “Auto” dobiera ikony do motywu pulpitu.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/GeneralPage.qml" line="86"/>
        <extracomment>icon-theme</extracomment>
<source>GeneralPage -- icon-theme --- Auto</source>
        <comment>icon-theme</comment>
        <translation>Auto</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/GeneralPage.qml" line="87"/>
        <extracomment>icon-theme</extracomment>
<source>GeneralPage -- icon-theme --- Light</source>
        <comment>icon-theme</comment>
        <translation>Jasny</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/GeneralPage.qml" line="88"/>
        <extracomment>icon-theme</extracomment>
<source>GeneralPage -- icon-theme --- Dark</source>
        <comment>icon-theme</comment>
        <translation>Ciemny</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/GeneralPage.qml" line="89"/>
        <extracomment>icon-theme</extracomment>
<source>GeneralPage -- icon-theme --- Colored</source>
        <comment>icon-theme</comment>
        <translation>Kolorowa</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/GeneralPage.qml" line="90"/>
        <extracomment>icon-theme</extracomment>
<source>GeneralPage -- icon-theme --- Classic</source>
        <comment>icon-theme</comment>
        <translation>Klasyczny</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/GeneralPage.qml" line="107"/>
        <source>GeneralPage --- Dashboard Appearance</source>
        <extracomment>Setting controlling how the dashboard is displayed - either as a popup attached to the system tray or as an ordinary window.</extracomment>
        <translation>Wygląd pulpitu</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/GeneralPage.qml" line="112"/>
        <source>GeneralPage --- Attached to Tray</source>
        <extracomment>Setting value indicating that the dashboard is a popup attached to the system tray.</extracomment>
        <translation>Połączony z zasobnikiem</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/GeneralPage.qml" line="114"/>
        <source>GeneralPage --- Window</source>
        <extracomment>Setting value indicating that the dashboard is an ordinary window</extracomment>
        <translation>Okno</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/GeneralPage.qml" line="118"/>
        <source>GeneralPage --- Attached mode may not work with all desktop environments, and it requires a system tray. If you can&apos;t find the dashboard, start Private Internet Access again to show it, and switch back to Window mode in Settings.</source>
        <translation>Tryb Dołączony może nie działać we wszystkich środowiskach pulpitu i wymaga zasobnika systemowego. Jeśli nie możesz znaleźć pulpitu, uruchom ponownie Private Internet Access, aby go pokazać i przełącz z powrotem do trybu Okna w Ustawieniach.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/GeneralPage.qml" line="132"/>
        <source>GeneralPage --- Reset All Settings</source>
        <translation>Resetuj wszystkie ustawienia</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/GeneralPage.qml" line="135"/>
        <source>GeneralPage --- Reset all settings to their default values?</source>
        <translation>Przywrócić wszystkie ustawienia do wartości domyślnych?</translation>
    </message>
</context>
<context>
    <name>HeaderBar</name>
    <message>
        <location filename="../../../../../client/res/components/common/Messages.qml" line="10"/>
        <source>HeaderBar --- Alpha pre-release</source>
        <extracomment>Screen reader annotation for the &quot;Alpha&quot; banner shown in alpha prerelease builds</extracomment>
        <translation>Przedpremierowa wersja alfa</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/Messages.qml" line="13"/>
        <source>HeaderBar --- Beta pre-release</source>
        <extracomment>Screen reader annotation for the &quot;Beta&quot; banner shown in beta prerelease builds</extracomment>
        <translation>Przedpremierowa wersja Beta</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/HeaderBar.qml" line="184"/>
        <source>HeaderBar --- Back</source>
        <extracomment>Screen reader annotation for the &quot;Back&quot; button in the header, which returns to the previous page. Should use the typical term for a &quot;back&quot; button in a dialog flow, wizard, etc.</extracomment>
        <translation>Wstecz</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/HeaderBar.qml" line="261"/>
        <source>HeaderBar --- RESUMING</source>
        <translation>WZNAWIANIE</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/HeaderBar.qml" line="263"/>
        <source>HeaderBar --- SNOOZING</source>
        <translation>DRZEMKA</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/HeaderBar.qml" line="265"/>
        <source>HeaderBar --- SNOOZED</source>
        <translation>UŚPIONA</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/HeaderBar.qml" line="276"/>
        <source>HeaderBar --- CONNECTING</source>
        <translation>ŁĄCZENIE</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/HeaderBar.qml" line="278"/>
        <source>HeaderBar --- DISCONNECTING</source>
        <translation>ROZŁĄCZANIE</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/HeaderBar.qml" line="280"/>
        <source>HeaderBar --- CONNECTED</source>
        <translation>POŁĄCZONO</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/HeaderBar.qml" line="337"/>
        <source>HeaderBar --- Menu</source>
        <extracomment>Screen reader annotation for the &quot;Menu&quot; button in the header. This button displays a popup menu.</extracomment>
        <translation>Menu</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/HeaderBar.qml" line="344"/>
        <source>HeaderBar --- Menu, update available</source>
        <extracomment>Screen reader annotation for the &quot;Menu&quot; button in the header when it displays the &quot;update available&quot; badge. The button still displays the normal popup menu, and the &quot;Menu&quot; translation should come first since that&apos;s its action. &quot;Update available&quot; is added as an additional description of the update badge.</extracomment>
        <translation>Menu, dostępna aktualizacja</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/HeaderBar.qml" line="399"/>
        <source>HeaderBar --- Settings</source>
        <translation>Ustawienia</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/HeaderBar.qml" line="403"/>
        <source>HeaderBar --- Logout</source>
        <translation>Wyloguj</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/HeaderBar.qml" line="408"/>
        <source>HeaderBar --- Quit</source>
        <translation>Zamknij</translation>
    </message>
</context>
<context>
    <name>HelpPage</name>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="31"/>
        <source>HelpPage --- Version</source>
        <translation>Wersja</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="57"/>
        <source>HelpPage --- Client:</source>
        <translation>Klient</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="72"/>
        <source>HelpPage --- Daemon:</source>
        <translation>Demon:</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="87"/>
        <source>HelpPage --- Changelog</source>
        <translation>Dziennik zmian</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="96"/>
        <source>HelpPage --- Quick Tour</source>
        <extracomment>This link displays the tour that users see initially after installation.</extracomment>
        <translation>Krótkie omówienie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="106"/>
        <source>HelpPage --- Receive Beta Updates</source>
        <translation>Możesz otrzymywać aktualizacje Beta</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="107"/>
        <source>HelpPage --- Join our beta program to test new features and provide feedback.</source>
        <translation>Dołącz do naszego programu beta, aby testować nowe funkcje i przekazywać nam swoje opinie.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="159"/>
        <source>HelpPage --- Support</source>
        <translation>Pomoc</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="167"/>
        <source>HelpPage --- Disable Accelerated Graphics</source>
        <translation>Wyłącz przyspieszoną grafikę</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="176"/>
        <source>HelpPage --- Restart Private Internet Access to apply this setting</source>
        <translation>Uruchom ponownie Private Internet Access, aby zastosować to ustawienie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="184"/>
        <source>HelpPage --- Accelerated graphics reduce CPU usage and enable graphical effects, but can cause issues with certain graphics cards or drivers.</source>
        <translation>Przyspieszona grafika obniża obciążenie procesora i włącza efekty graficzne, ale może być przyczyną problemów z niektórymi kartami graficznymi lub sterownikami.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="188"/>
        <source>HelpPage --- Enable Debug Logging</source>
        <translation>Włącz dziennik debugowania</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="189"/>
        <source>HelpPage --- Save debug logs which can be submitted to technical support to help troubleshoot problems.</source>
        <translation>Zapisz dzienniki debugowania, które można przesłać do działu pomocy technicznej, aby uzyskać pomoc przy rozwiązywaniu problemów.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="205"/>
        <source>HelpPage --- Submit Debug Logs</source>
        <translation>Prześlij dzienniki debugowania</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="211"/>
        <source>HelpPage --- Support Portal</source>
        <translation>Portal pomocy technicznej</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="226"/>
        <source>HelpPage --- Maintenance</source>
        <translation>Konserwacja</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="237"/>
        <source>HelpPage --- Reinstalling Network Adapter...</source>
        <translation>Ponowna instalacja karty sieciowej...</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="239"/>
        <source>HelpPage --- Waiting for Disconnect...</source>
        <translation>Oczekiwanie na rozłączenie...</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="241"/>
        <source>HelpPage --- Reinstall Network Adapter</source>
        <translation>Ponowna instalacja karty sieciowej</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="251"/>
        <source>HelpPage --- The network adapter cannot be reinstalled while connected. Disconnect and reinstall now?</source>
        <translation>Karty sieciowej nie można ponownie zainstalować podczas połączenia. Czy chcesz rozłączyć i ponownie zainstalować teraz?</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="251"/>
        <source>HelpPage --- Disconnect needed</source>
        <translation>Wymagane rozłączenie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="284"/>
        <source>HelpPage --- The network adapter has been successfully reinstalled.</source>
        <translation>Karta sieciowa została pomyślnie zainstalowana ponownie.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="287"/>
        <source>HelpPage --- The network adapter has been successfully reinstalled. You may need to reboot your system.</source>
        <translation>Karta sieciowa została pomyślnie zainstalowana ponownie. Może być konieczne ponowne uruchomienie systemu.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="290"/>
        <source>HelpPage --- There was an error while attempting to reinstall the network adapter.</source>
        <translation>Wystąpił błąd podczas próby ponownej instalacji karty sieciowej.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="300"/>
        <source>HelpPage --- Failed to run command in terminal. Please install a terminal compatible with x-terminal-emulator.</source>
        <extracomment>&quot;Terminal&quot; refers to a terminal emulator in the Linux build, such as xterm, GNOME Terminal, Konsole, etc. This should use the typical desktop terminology.</extracomment>
        <translation>Nie udało się uruchomić polecenia w terminalu. Zainstaluj terminal zgodny z emulatorem terminalu x.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="302"/>
        <source>HelpPage --- Unable to open terminal</source>
        <translation>Nie można otworzyć terminalu</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="331"/>
        <source>HelpPage --- Reinstalling Split Tunnel Filter...</source>
        <translation>Ponowna instalacja filtru podzielonych tuneli</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="332"/>
        <source>HelpPage --- Reinstall Split Tunnel Filter</source>
        <translation>Zainstaluj ponownie filtr podzielonych tuneli</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="371"/>
        <source>HelpPage --- The split tunnel filter was reinstalled.</source>
        <translation>Ponownie zainstalowano filtr podzielonych tuneli</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="394"/>
        <source>HelpPage --- Uninstall Private Internet Access</source>
        <translation>Odinstaluj Private Internet Access</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="402"/>
        <source>HelpPage --- Uninstall {{BRAND}}?</source>
        <translation>Odinstalować {{BRAND}}?</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="402"/>
        <source>HelpPage --- Uninstall</source>
        <translation>Odinstaluj</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/HelpPage.qml" line="444"/>
        <source>HelpPage --- v%1</source>
        <translation>w.%1</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/SettingsMessages.qml" line="10"/>
        <source>HelpPage --- Reinstall successful</source>
        <translation>Ponowna instalacja powiodła się</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/SettingsMessages.qml" line="12"/>
        <source>HelpPage --- Reinstall error</source>
        <translation>Błąd podczas ponownej instalacji</translation>
    </message>
</context>
<context>
    <name>IPModule</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/IPModule.qml" line="20"/>
        <source>IPModule --- IP tile</source>
        <extracomment>Screen reader annotation for the tile displaying the IP addresses.</extracomment>
        <translation>Płytka IP</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/IPModule.qml" line="48"/>
        <source>IPModule --- IP</source>
        <translation>IP</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/IPModule.qml" line="74"/>
        <source>IPModule --- VPN IP</source>
        <translation>VPN IP</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/IPModule.qml" line="119"/>
        <source>IPModule --- Port forward</source>
        <extracomment>Screen reader annotation for the arrow graphic that represents the &quot;port forward&quot; status, which is enabled by the &quot;Port Forwarding&quot; setting.</extracomment>
        <translation>Port przekierowania zewnętrznego IP</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/IPModule.qml" line="162"/>
        <source>IPModule --- Failed</source>
        <extracomment>Port forward - label used in IP widget when request fails</extracomment>
        <translation>Niepowodzenie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/IPModule.qml" line="165"/>
        <source>IPModule --- Not Available</source>
        <extracomment>Port forward - label used in IP widget when not available for this region</extracomment>
        <translation>Niedostępne</translation>
    </message>
</context>
<context>
    <name>LoginButton</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/login/LoginButton.qml" line="163"/>
        <source>LoginButton --- LOG IN</source>
        <translation>ZALOGUJ</translation>
    </message>
</context>
<context>
    <name>LoginPage</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/login/LoginPage.qml" line="51"/>
        <source>LoginPage --- Invalid login</source>
        <translation>Nieprawidłowy login</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/login/LoginPage.qml" line="53"/>
        <source>LoginPage --- Too many attempts, try again in 1 hour</source>
        <translation>Zbyt wiele prób, spróbuj ponownie za 1 godzinę</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/login/LoginPage.qml" line="55"/>
        <source>LoginPage --- Can&apos;t reach the server</source>
        <translation>Nie można połączyć się z serwerem</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/login/LoginPage.qml" line="84"/>
        <source>LoginPage --- Username</source>
        <translation>Nazwa użytkownika</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/login/LoginPage.qml" line="93"/>
        <source>LoginPage --- Use your normal username beginning with &apos;p&apos;.</source>
        <extracomment>Shown if the user attempts to login with the wrong account type. &apos;p&apos; refers to the letter prefix on the username; the p should be kept in Latin script. (Example user names are &quot;p0123456&quot;, &quot;p5858587&quot;).</extracomment>
        <translation>Użyj swojej zwykłej nazwy użytkownika zaczynającej się od &apos;p&apos;.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/login/LoginPage.qml" line="106"/>
        <source>LoginPage --- Password</source>
        <translation>Hasło</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/login/LoginPage.qml" line="160"/>
        <source>LoginPage --- Forgot Password</source>
        <translation>Nie pamiętam hasła</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/login/LoginPage.qml" line="170"/>
        <source>LoginPage --- Buy Account</source>
        <translation>Kup konto</translation>
    </message>
</context>
<context>
    <name>ModuleLoader</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/MovableModule.qml" line="265"/>
        <source>ModuleLoader --- Favorite tile</source>
        <extracomment>Screen reader annotation for the &quot;bookmark&quot; button on tiles. This behaves like a checkbox that can be toggled, i.e. &quot;this is a favorite tile&quot; - set to on/off.</extracomment>
        <translation>Płytka Ulubione</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/MovableModule.qml" line="271"/>
        <source>ModuleLoader --- Remove %1 from favorites</source>
        <extracomment>Screen reader annotation for &apos;active&apos; tile bookmark button that will remove a tile from favorites. %1 is a tile name, like &quot;Performance tile&quot;, &quot;Account tile&quot;, etc.</extracomment>
        <translation>Usuń %1 z Ulubionych</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/MovableModule.qml" line="276"/>
        <source>ModuleLoader --- Add %1 to favorites</source>
        <extracomment>Screen reader annotation for &apos;inactive&apos; tile bookmark button that will add a tile to favorites. %1 is a tile name, like &quot;Performance tile&quot;, &quot;Account tile&quot;, etc.</extracomment>
        <translation>Dodaj %1 do Ulubionych</translation>
    </message>
</context>
<context>
    <name>NativeAcc::MoveButtonAttached</name>
    <message>
        <location filename="../../../../../client/src/nativeacc/buttons.cpp" line="81"/>
        <source>NativeAcc::MoveButtonAttached --- Moves the tile up</source>
        <extracomment>Screen reader description of the &quot;move up&quot; action used to move a tile up in the list. Grammatically, the implied subject is the accessibility action, &quot;[This action] moves the tile up&quot;.</extracomment>
        <translation>Przesuwa kafelek do góry</translation>
    </message>
    <message>
        <location filename="../../../../../client/src/nativeacc/buttons.cpp" line="88"/>
        <source>NativeAcc::MoveButtonAttached --- Moves the tile down</source>
        <extracomment>Screen reader description of the &quot;move down&quot; action used to move a tile down in the list. Grammatically, the implied subject is the accessibility action, &quot;[This action] moves the tile down&quot;.</extracomment>
        <translation>Przesuwa kafelek w dół</translation>
    </message>
    <message>
        <location filename="../../../../../client/src/nativeacc/buttons.cpp" line="100"/>
        <source>NativeAcc::MoveButtonAttached --- Move up</source>
        <extracomment>Screen reader annotation of the &quot;move up&quot; action used to move a tile up in the list. Should be a verb or short verb phrase.</extracomment>
        <translation>W górę</translation>
    </message>
    <message>
        <location filename="../../../../../client/src/nativeacc/buttons.cpp" line="106"/>
        <source>NativeAcc::MoveButtonAttached --- Move down</source>
        <extracomment>Screen reader annotation of the &quot;move down&quot; action used to move a tile down in the list. Should be a verb or short verb phrase.</extracomment>
        <translation>W dół</translation>
    </message>
</context>
<context>
    <name>NativeAcc::TableCellCheckButtonImpl</name>
    <message>
        <location filename="../../../../../client/src/nativeacc/tablecells.cpp" line="133"/>
        <source>NativeAcc::TableCellCheckButtonImpl --- checked</source>
        <extracomment>Value indicator for a toggle button in the &quot;checked&quot; state. Should use normal terminology for a check box or toggle button. (Screen reader annotation for &quot;Favorite region&quot; table cell button on Windows.)</extracomment>
        <translation>Zaznaczone</translation>
    </message>
    <message>
        <location filename="../../../../../client/src/nativeacc/tablecells.cpp" line="141"/>
        <source>NativeAcc::TableCellCheckButtonImpl --- unchecked</source>
        <extracomment>Value indicator for a toggle button in the &quot;unchecked&quot; state. Should use normal terminology for a check box or toggle button. (Screen reader annotation for &quot;Favorite region&quot; table cell button on Windows.)</extracomment>
        <translation>Odznaczone</translation>
    </message>
</context>
<context>
    <name>NativeAcc::ValueTextAttached</name>
    <message>
        <location filename="../../../../../client/src/nativeacc/valuetext.cpp" line="65"/>
        <source>NativeAcc::ValueTextAttached --- Copies the value</source>
        <extracomment>Screen reader description of the &quot;copy&quot; action for IP address/port fields, etc. &quot;Copies&quot; refers to copying to the system clipboard and should use the OS&apos;s normal terminology. Grammatically, the implied subject is the accessibility action, &quot;[This action] copies the value [to the clipboard]&quot;.</extracomment>
        <translation>Kopiuje wartość</translation>
    </message>
    <message>
        <location filename="../../../../../client/src/nativeacc/valuetext.cpp" line="78"/>
        <source>NativeAcc::ValueTextAttached --- Copy</source>
        <extracomment>Screen reader annotation to describe the &quot;copy&quot; action on the IP address and port fields, etc. Copies the text to the clipboard, should be a verb or short verb phrase.</extracomment>
        <translation>Skopiuj</translation>
    </message>
</context>
<context>
    <name>NavigationDot</name>
    <message>
        <location filename="../../../../../client/res/components/onboarding/NavigationDot.qml" line="26"/>
        <source>NavigationDot --- Page %1</source>
        <extracomment>Screen reader annotation for the navigation dots in the Quick Tour. These indicate pages the user can navigate to; &quot;%1&quot; is a page index from 1 to 3.</extracomment>
        <translation>Strona %1</translation>
    </message>
</context>
<context>
    <name>Notification</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/notifications/Notification.qml" line="26"/>
        <source>Notification --- Info</source>
        <extracomment>Screen reader annotation for the &quot;info&quot; icon used for messages</extracomment>
        <translation>Info</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/notifications/Notification.qml" line="28"/>
        <source>Notification --- Warning</source>
        <extracomment>Screen reader annotation for the &quot;warning&quot; icon used for messages</extracomment>
        <translation>Ostrzeżenie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/notifications/Notification.qml" line="30"/>
        <source>Notification --- Error</source>
        <extracomment>Screen reader annotation for the &quot;error&quot; icon used for messages</extracomment>
        <translation>Błąd</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/notifications/Notification.qml" line="59"/>
        <source>Notification --- %1: %2</source>
        <extracomment>Screen reader annotation used for Connect page message group, such as &quot;Warning: Killswitch is enabled&quot;. &quot;%1&quot; is a severity name (&quot;Info&quot;/ &quot;Warning&quot;/&quot;Error&quot;), and &quot;%2&quot; is a status message.</extracomment>
        <translation>%1: %2</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/notifications/Notification.qml" line="108"/>
        <source>Notification --- Dismiss message: %1</source>
        <extracomment>Screen reader annotation for the &quot;X&quot; button on dismissible messages. This removes the message until it triggers again. &quot;%1&quot; is a message, such as &quot;Killswitch enabled.&quot;</extracomment>
        <translation>Odrzuć komunikat: %1</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/notifications/Notification.qml" line="205"/>
        <source>Notification --- Stop</source>
        <extracomment>Screen reader annotation for the square &quot;Stop&quot; button on the message used to download an update.</extracomment>
        <translation>Stop</translation>
    </message>
</context>
<context>
    <name>OnboardingWindow</name>
    <message>
        <location filename="../../../../../client/res/components/onboarding/OnboardingWindow.qml" line="13"/>
        <source>OnboardingWindow --- Quick Tour</source>
        <translation>Krótkie omówienie</translation>
    </message>
</context>
<context>
    <name>OverlayDialog</name>
    <message>
        <location filename="../../../../../client/res/components/common/OverlayDialog.qml" line="42"/>
        <extracomment>dialog button</extracomment>
<source>OverlayDialog -- dialog button --- OK</source>
        <comment>dialog button</comment>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/OverlayDialog.qml" line="43"/>
        <location filename="../../../../../client/res/components/common/OverlayDialog.qml" line="45"/>
        <extracomment>dialog button</extracomment>
<source>OverlayDialog -- dialog button --- Cancel</source>
        <comment>dialog button</comment>
        <translation>Anuluj</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/OverlayDialog.qml" line="44"/>
        <extracomment>dialog button</extracomment>
<source>OverlayDialog -- dialog button --- Save</source>
        <comment>dialog button</comment>
        <translation>Zapisz</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/OverlayDialog.qml" line="46"/>
        <extracomment>dialog button</extracomment>
<source>OverlayDialog -- dialog button --- Close</source>
        <comment>dialog button</comment>
        <translation>Zamknij</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/OverlayDialog.qml" line="47"/>
        <extracomment>dialog button</extracomment>
<source>OverlayDialog -- dialog button --- Discard</source>
        <comment>dialog button</comment>
        <translation>Odrzuć</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/OverlayDialog.qml" line="48"/>
        <extracomment>dialog button</extracomment>
<source>OverlayDialog -- dialog button --- Apply</source>
        <comment>dialog button</comment>
        <translation>Zastosuj</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/OverlayDialog.qml" line="49"/>
        <extracomment>dialog button</extracomment>
<source>OverlayDialog -- dialog button --- Reset</source>
        <comment>dialog button</comment>
        <translation>Resetuj</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/OverlayDialog.qml" line="50"/>
        <extracomment>dialog button</extracomment>
<source>OverlayDialog -- dialog button --- Restore Defaults</source>
        <comment>dialog button</comment>
        <translation>Przywróć domyślne</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/OverlayDialog.qml" line="51"/>
        <extracomment>dialog button</extracomment>
<source>OverlayDialog -- dialog button --- Help</source>
        <comment>dialog button</comment>
        <translation>Pomoc</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/OverlayDialog.qml" line="52"/>
        <extracomment>dialog button</extracomment>
<source>OverlayDialog -- dialog button --- Save All</source>
        <comment>dialog button</comment>
        <translation>Zapisz wszystkie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/OverlayDialog.qml" line="53"/>
        <extracomment>dialog button</extracomment>
<source>OverlayDialog -- dialog button --- Yes</source>
        <comment>dialog button</comment>
        <translation>Tak</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/OverlayDialog.qml" line="54"/>
        <extracomment>dialog button</extracomment>
<source>OverlayDialog -- dialog button --- Yes to All</source>
        <comment>dialog button</comment>
        <translation>Tak dla wszystkich</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/OverlayDialog.qml" line="55"/>
        <extracomment>dialog button</extracomment>
<source>OverlayDialog -- dialog button --- No</source>
        <comment>dialog button</comment>
        <translation>Nie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/OverlayDialog.qml" line="56"/>
        <extracomment>dialog button</extracomment>
<source>OverlayDialog -- dialog button --- No to All</source>
        <comment>dialog button</comment>
        <translation>Nie dla wszystkich</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/OverlayDialog.qml" line="57"/>
        <extracomment>dialog button</extracomment>
<source>OverlayDialog -- dialog button --- Abort</source>
        <comment>dialog button</comment>
        <translation>Przerwij</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/OverlayDialog.qml" line="58"/>
        <extracomment>dialog button</extracomment>
<source>OverlayDialog -- dialog button --- Retry</source>
        <comment>dialog button</comment>
        <translation>Ponów</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/OverlayDialog.qml" line="59"/>
        <extracomment>dialog button</extracomment>
<source>OverlayDialog -- dialog button --- Ignore</source>
        <comment>dialog button</comment>
        <translation>Ignoruj</translation>
    </message>
</context>
<context>
    <name>Page1Welcome</name>
    <message>
        <location filename="../../../../../client/res/components/onboarding/pages/Page1Welcome.qml" line="12"/>
        <source>Page1Welcome --- Welcome to</source>
        <translation>KRÓTKIE OMÓWIENIE</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/onboarding/pages/Page1Welcome.qml" line="50"/>
        <source>Page1Welcome --- QUICK TOUR</source>
        <translation>ZALOGUJ</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/onboarding/pages/Page1Welcome.qml" line="80"/>
        <source>Page1Welcome --- LOG IN</source>
        <translation>ZALOGUJ</translation>
    </message>
</context>
<context>
    <name>Page2Theme</name>
    <message>
        <location filename="../../../../../client/res/components/onboarding/pages/Page2Theme.qml" line="21"/>
        <source>Page2Theme --- GETTING STARTED</source>
        <translation>ROZPOCZĘCIE PRACY</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/onboarding/pages/Page2Theme.qml" line="22"/>
        <source>Page2Theme --- Choose your theme</source>
        <translation>Wybierz motyw</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/onboarding/pages/Page2Theme.qml" line="23"/>
        <source>Page2Theme --- Private Internet Access comes with light and dark themes to fit the look and feel of your desktop.</source>
        <translation>Private Internet Access występuje w wersji z jasnymi i ciemnymi motywami, dzięki czemu dopasowuje się do wyglądu i grafiki Twojego pulpitu.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/onboarding/pages/Page2Theme.qml" line="47"/>
        <source>Page2Theme --- Dark Theme</source>
        <translation>Motyw Ciemny</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/onboarding/pages/Page2Theme.qml" line="80"/>
        <source>Page2Theme --- Light Theme</source>
        <translation>Motyw Jasny</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/onboarding/pages/Page2Theme.qml" line="124"/>
        <source>Page2Theme --- Theme preview</source>
        <translation>Podgląd Motywu</translation>
    </message>
</context>
<context>
    <name>Page3Customize</name>
    <message>
        <location filename="../../../../../client/res/components/onboarding/pages/Page3Customize.qml" line="17"/>
        <source>Page3Customize --- PRO TIP</source>
        <translation>WSKAZÓWKA PRO</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/onboarding/pages/Page3Customize.qml" line="18"/>
        <source>Page3Customize --- Customize Your VPN Experience</source>
        <translation>Dostosuj warunki swojej pracy w VPN</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/onboarding/pages/Page3Customize.qml" line="19"/>
        <source>Page3Customize --- Choose from a variety of tiles to customize your dashboard to display the information and controls most relevant to you.</source>
        <translation>do wyboru jest wiele różnych płytek, które mogą posłużyć do personalizacji pulpitu i sposobu prezentacji informacji i tych elementów sterujących, które są najważniejsze dla użytkownika.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/onboarding/pages/Page3Customize.qml" line="45"/>
        <source>Page3Customize --- Customization preview</source>
        <translation>Podgląd personalizacji</translation>
    </message>
</context>
<context>
    <name>Page4Finish</name>
    <message>
        <location filename="../../../../../client/res/components/onboarding/pages/Page4Finish.qml" line="16"/>
        <source>Page4Finish --- GOOD TO GO</source>
        <translation>GOTOWE DO PRACY</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/onboarding/pages/Page4Finish.qml" line="17"/>
        <source>Page4Finish --- VPN Protection Everywhere You Need It</source>
        <translation>Ochrona VPN wszędzie tam, gdzie JEST ci potrzebna</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/onboarding/pages/Page4Finish.qml" line="18"/>
        <source>Page4Finish --- Your Private Internet Access account can protect up to 10 different devices.</source>
        <translation>Twoje konto w Private Internet Access account może zapewnić ochronę maksymalnie 10 różnych urządzeń.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/onboarding/pages/Page4Finish.qml" line="28"/>
        <source>Page4Finish --- Supported platforms</source>
        <translation>Obsługiwane platformy</translation>
    </message>
</context>
<context>
    <name>PageFooter</name>
    <message>
        <location filename="../../../../../client/res/components/onboarding/PageFooter.qml" line="15"/>
        <source>PageFooter --- SKIP TOUR</source>
        <translation>POMIŃ OMÓWIENIE</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/onboarding/PageFooter.qml" line="66"/>
        <source>PageFooter --- LOG IN</source>
        <translation>ZALOGUJ</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/onboarding/PageFooter.qml" line="66"/>
        <source>PageFooter --- NEXT</source>
        <translation>DALEJ</translation>
    </message>
</context>
<context>
    <name>PerformanceModule</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/PerformanceModule.qml" line="20"/>
        <source>PerformanceModule --- Performance tile</source>
        <extracomment>Screen reader annotation for the &quot;Performance&quot; tile containing the performance graph.</extracomment>
        <translation>Płytka wydajności</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/PerformanceModule.qml" line="74"/>
        <source>PerformanceModule --- PERFORMANCE</source>
        <translation>WYDAJNOŚĆ</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/PerformanceModule.qml" line="89"/>
        <source>PerformanceModule --- %1 Mbps</source>
        <translation>%1 Mb/s</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/PerformanceModule.qml" line="94"/>
        <source>PerformanceModule --- %1 kbps</source>
        <translation>%1 kb/s</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/PerformanceModule.qml" line="114"/>
        <source>PerformanceModule --- Performance history</source>
        <extracomment>Screen reader annotation for the &quot;Performance&quot; graph, which lists recent performance measurements.</extracomment>
        <translation>Historia wydajności</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/PerformanceModule.qml" line="248"/>
        <source>PerformanceModule --- 1 minute ago</source>
        <extracomment>Performance graph, 1:00 ago (screen reader annotation)</extracomment>
        <translation>1 minutę temu</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/PerformanceModule.qml" line="252"/>
        <source>PerformanceModule --- 2 minutes ago</source>
        <extracomment>Performance graph, 2:00 ago (screen reader annotation)</extracomment>
        <translation>2 minuty temu</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/PerformanceModule.qml" line="258"/>
        <source>PerformanceModule --- %1 seconds ago</source>
        <extracomment>Performance graph, 0:05-0:55 ago, always a multiple of 5 (screen reader annotation)</extracomment>
        <translation>%1 sek. temu</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/PerformanceModule.qml" line="262"/>
        <source>PerformanceModule --- 1 minute %1 seconds ago</source>
        <extracomment>Performance graph, 1:05-1:55 ago, always a multiple of 5 (screen reader annotation)</extracomment>
        <translation>1 minutę%1 sek.temu</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/PerformanceModule.qml" line="266"/>
        <source>PerformanceModule --- 2 minutes %1 seconds ago</source>
        <extracomment>Performance graph, 2:05-2:55 ago, always a multiple of 5 (screen reader annotation)</extracomment>
        <translation>2 minuty %1 sek. temu</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/PerformanceModule.qml" line="280"/>
        <source>PerformanceModule --- %1 download speed</source>
        <extracomment>Screen reader annotation for performance bar - download speed from a past interval, like &quot;3.5 Mbps download speed&quot;. Speed uses the &quot;%1 Mbps&quot; or &quot;%1 kbps&quot; string from the performance graph</extracomment>
        <translation>%1 prędkość pobierania</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/PerformanceModule.qml" line="360"/>
        <source>PerformanceModule --- Download speed</source>
        <extracomment>Screen reader annotation for the &quot;download&quot; arrow labeling the download speed display</extracomment>
        <translation>Prędkość przesyłania</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/PerformanceModule.qml" line="381"/>
        <source>PerformanceModule --- Upload speed</source>
        <extracomment>Screen reader annotation for the &quot;upload&quot; arrow labeling the upload speed display</extracomment>
        <translation>Czas trwania połączenia</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/PerformanceModule.qml" line="403"/>
        <source>PerformanceModule --- Connection duration</source>
        <extracomment>Screen reader annotation for the clock icon labeling the connection duration display</extracomment>
        <translation>Pokaż menu</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/PerformanceModule.qml" line="425"/>
        <source>PerformanceModule -- short-time-part --- 0%1</source>
        <comment>short-time-part</comment>
        <extracomment>Render a time part (hours/minutes/seconds) for the connection duration that&apos;s less than 10. This can pad the value with a leading 0, such as &apos;0%1&apos;.</extracomment>
        <translation>0%1</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/PerformanceModule.qml" line="429"/>
        <source>PerformanceModule -- long-time-part --- %1</source>
        <comment>long-time-part</comment>
        <extracomment>Render a time part (hours/minutes/seconds) for the connection duration that&apos;s 10 or more.</extracomment>
        <translation>%1</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/PerformanceModule.qml" line="457"/>
        <source>PerformanceModule -- duration-hours-minutes --- %1:%2</source>
        <comment>duration-hours-minutes</comment>
        <extracomment>Connection duration template for 1 hour or more - %1 is hours, %2 is minutes Hours and minutes are rendered with the time-part or short-time-part strings</extracomment>
        <translation>%1:%2</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/PerformanceModule.qml" line="461"/>
        <source>PerformanceModule -- duration-minutes-seconds --- %1:%2</source>
        <comment>duration-minutes-seconds</comment>
        <extracomment>Connection duration template for less than 1 hour - %1 is minutes, %2 is seconds Minutes and seconds are rendered with the time-part or short-time-part strings</extracomment>
        <translation>%1:%2</translation>
    </message>
</context>
<context>
    <name>PlatformUIStrings</name>
    <message>
        <location filename="../../../../../client/src/platformuistrings.cpp" line="15"/>
        <source>PlatformUIStrings --- Show menu</source>
        <extracomment>Screen reader annotation for the &quot;show menu&quot; action in the Mac tray icon</extracomment>
        <translation>Wył.</translation>
    </message>
</context>
<context>
    <name>PrivacyPage</name>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/PrivacyPage.qml" line="24"/>
        <source>PrivacyPage --- VPN Killswitch</source>
        <extracomment>Label for the setting that controls the VPN killswitch, a privacy feature that prevents network traffic from leaving the user&apos;s computer unless it is going through the VPN. The term &quot;killswitch&quot; is a recognizable term in the VPN industry that gets used in marketing and can be left unlocalized if there is no clear translation for the concept.</extracomment>
        <translation>Wyłącznik awaryjny VPN</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/PrivacyPage.qml" line="26"/>
        <source>PrivacyPage --- Prevent leaks by blocking traffic outside the VPN</source>
        <extracomment>Descriptive label for the VPN killswitch setting.</extracomment>
        <translation>Zapobiegaj wyciekom, blokując ruch poza VPN</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/PrivacyPage.qml" line="34"/>
        <source>PrivacyPage --- Off: Don&apos;t block any traffic</source>
        <extracomment>Setting value description for when the VPN killswitch is set to &quot;Off&quot;. No network traffic is blocked and the user&apos;s privacy can potentially be compromised if the VPN connection unexpectedly drops.</extracomment>
        <translation>Wyłączony: nie blokuje żadnego ruchu</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/PrivacyPage.qml" line="39"/>
        <source>PrivacyPage --- Auto: Block outside traffic when the VPN is on</source>
        <extracomment>Setting value description for when the VPN killswitch is set to &quot;Auto&quot;. Network traffic that tries to go outside the VPN is blocked as long as the user has turned on the VPN, including if the actual VPN connection itself unexpectedly drops.</extracomment>
        <translation>Automatycznie: blokuje ruch zewnętrzny, gdy sieć VPN jest włączona</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/PrivacyPage.qml" line="44"/>
        <source>PrivacyPage --- Always: Also block all traffic when the VPN is off</source>
        <extracomment>Setting value description for when the VPN killswitch is set to &quot;Always&quot;. Network traffic that tries to go outside the VPN is always blocked, even when the user has switched off the VPN. This effectively disables the user&apos;s internet connection whenever they are not connected to the VPN.</extracomment>
        <translation>Zawsze: blokuje cały ruch, gdy sieć VPN jest wyłączona</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/PrivacyPage.qml" line="47"/>
        <source>PrivacyPage -- privacy-killswitch --- Off</source>
        <comment>privacy-killswitch</comment>
        <extracomment>These values are used for the Killswitch setting.</extracomment>
        <translation>Wyłączony</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/PrivacyPage.qml" line="47"/>
        <source>PrivacyPage --- Auto</source>
        <translation>Automatycznie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/PrivacyPage.qml" line="47"/>
        <source>PrivacyPage --- Always</source>
        <translation>Zawsze</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/PrivacyPage.qml" line="64"/>
        <source>PrivacyPage --- PIA MACE requires using PIA DNS in order to function.</source>
        <translation>PIA MACE wymaga użycia PIA DNS, aby funkcjonować.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/PrivacyPage.qml" line="65"/>
        <source>PrivacyPage --- PIA MACE</source>
        <translation>PIA MACE</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/PrivacyPage.qml" line="66"/>
        <source>PrivacyPage --- Block domains used for ads, trackers, and malware</source>
        <translation>Blokuj domeny używane do reklam, śledzenia i złośliwego oprogramowania</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/PrivacyPage.qml" line="72"/>
        <source>PrivacyPage -- privacy-mace --- Off</source>
        <comment>privacy-mace</comment>
        <extracomment>These values are used for the MACE setting.</extracomment>
        <translation>Wyłączony</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/PrivacyPage.qml" line="72"/>
        <source>PrivacyPage --- On</source>
        <translation>Włączony</translation>
    </message>
</context>
<context>
    <name>ProxyPage</name>
    <message>
    <source>ProxyPage --- Redirect the VPN connection through an additional location</source>
        <translation>Przekieruj połączenie VPN przez dodatkową lokalizację</translation>
    </message>
    <message>
    <source>ProxyPage --- Shadowsocks - %1</source>
        <extracomment>Label for the Shadowsocks proxy choice. &quot;Shadowsocks&quot; is a proper noun and shouldn&apos;t be translated, but the dash should match the other proxy choice labels. %1 is a description of the selected region, such as &quot;Japan&quot; or &quot;Auto (US East)&quot;, this uses the localizations defined for the region module.</extracomment>
        <translation>Shadowsocks - %1</translation>
    </message>
    <message>
    <source>ProxyPage --- SOCKS5 Proxy - %1</source>
        <extracomment>Label for the custom SOCKS5 proxy choice when a proxy has been configured. %1 is the configured proxy (host or host:port), such as &quot;SOCKS5 Proxy: 127.0.0.1&quot; or &quot;SOCKS5 Proxy: 172.16.24.18:9080&quot;</extracomment>
        <translation>Serwer proxy SOCKS5 - %1</translation>
    </message>
    <message>
    <source>ProxyPage --- Configure...</source>
        <extracomment>Opens a dialog to specify the custom proxy host/port/credentials.</extracomment>
        <translation>Skonfiguruj</translation>
    </message>
</context>
<context>
    <name>QuickConnectButton</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/QuickConnectButton.qml" line="115"/>
        <source>QuickConnectButton --- Connect to favorite %1</source>
        <extracomment>Screen reader annotation for a Quick Connect button with a heart icon, which is used for a favorite region. %1 is a region name.</extracomment>
        <translation>Połącz z Ulubionymi %1</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/QuickConnectButton.qml" line="120"/>
        <source>QuickConnectButton --- Connect to %1</source>
        <extracomment>Screen reader annotation for a Quick Connect button without a heart icon, which is for a recently-used or nearby location. %1 is a region name.</extracomment>
        <translation>Połącz z %1</translation>
    </message>
</context>
<context>
    <name>QuickConnectModule</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/QuickConnectModule.qml" line="16"/>
        <source>QuickConnectModule --- Quick Connect tile</source>
        <extracomment>Screen reader annotation for the Quick Connect tile.</extracomment>
        <translation>Lista Regionów</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/QuickConnectModule.qml" line="25"/>
        <source>QuickConnectModule --- QUICK CONNECT</source>
        <translation>SZYBKIE ŁĄCZENIE</translation>
    </message>
</context>
<context>
    <name>ReconnectWarning</name>
    <message>
        <location filename="../../../../../client/res/components/settings/ReconnectWarning.qml" line="61"/>
        <source>ReconnectWarning --- Reconnect to apply settings.</source>
        <translation>Połącz ponownie, aby zastosować ustawienia.</translation>
    </message>
</context>
<context>
    <name>RegionAuto</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/region/RegionAuto.qml" line="16"/>
        <source>RegionAuto --- Choose automatically</source>
        <translation>Wybierz automatycznie</translation>
    </message>
</context>
<context>
    <name>RegionDelegate</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/region/RegionDelegate.qml" line="44"/>
        <source>RegionDelegate --- Port forwarding is not available for this location.</source>
        <translation>Przekierowywanie portu nie jest dostępne dla tej lokalizacji.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/region/RegionDelegate.qml" line="45"/>
        <source>RegionDelegate --- Port forwarding is not available for this country.</source>
        <translation>Przekierowywanie portu nie jest dostępne dla tego kraju.</translation>
    </message>
</context>
<context>
    <name>RegionListView</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/region/RegionListView.qml" line="521"/>
        <source>RegionListView --- Region</source>
        <extracomment>Screen reader annotation for the column in the region list that displays the region names and flags.</extracomment>
        <translation>Region</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/region/RegionListView.qml" line="527"/>
        <source>RegionListView --- Latency</source>
        <extracomment>Screen reader annotation for the column in the region list that displays the regions&apos; latency measurements.</extracomment>
        <translation>Opóźnienie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/region/RegionListView.qml" line="533"/>
        <source>RegionListView --- Favorite</source>
        <extracomment>Screen reader annotation for the column in the region list that displays the regions&apos; &quot;favorite region&quot; buttons.</extracomment>
        <translation>Ulubiony</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/region/RegionListView.qml" line="73"/>
        <source>RegionListView --- Region list</source>
        <extracomment>Screen reader annotation for the region list on the regions page, where users can choose a region and mark regions as favorites. (Also used to describe the scroll bar for the region list.)</extracomment>
        <translation>Region</translation>
    </message>
</context>
<context>
    <name>RegionModule</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/RegionModule.qml" line="74"/>
        <source>RegionModule --- Auto</source>
        <translation>Automatycznie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/RegionModule.qml" line="72"/>
        <source>RegionModule --- Auto (%1)</source>
        <translation>Automatycznie (%1)</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/RegionModule.qml" line="19"/>
        <source>RegionModule --- Region tile</source>
        <extracomment>Screen reader annotation for the Region tile, which users can click to go to the Region page and choose a region.</extracomment>
        <translation>Płytka regionu</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/RegionModule.qml" line="49"/>
        <source>RegionModule --- VPN SERVER</source>
        <translation>SERWER VPN</translation>
    </message>
    <message>
    <source>RegionModule --- VIA SOCKS5 PROXY</source>
        <translation>PRZEZ SERWER PROXY SOCKS5</translation>
    </message>
    <message>
    <source>RegionModule --- VIA SHADOWSOCKS</source>
        <translation>PRZEZ SHADOWSOCKS</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/RegionModule.qml" line="102"/>
        <source>RegionModule --- Select region</source>
        <extracomment>Screen reader annotation for the button that makes up the Region tile, which users can click to go to the Region page and select a region. Should be a short description of the &quot;select region&quot; action.</extracomment>
        <translation>Wybierz region</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/RegionModule.qml" line="107"/>
        <source>RegionModule --- Select region, %1 is selected</source>
        <extracomment>Screen reader description for the Region tile button. Should begin with the &quot;Select region&quot; translation, since that&apos;s what the button does. This also includes the currently-selected region, which the button displays. %1 is a region name.</extracomment>
        <translation>Wybierz region, wybrano %1</translation>
    </message>
</context>
<context>
    <name>RegionPage</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/region/RegionPage.qml" line="48"/>
        <source>RegionPage --- Search...</source>
        <translation>Szukaj...</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/region/RegionPage.qml" line="73"/>
        <source>RegionPage --- Name</source>
        <translation>Nazwa</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/region/RegionPage.qml" line="77"/>
        <source>RegionPage --- Latency</source>
        <translation>Czas oczekiwania</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/region/RegionPage.qml" line="17"/>
        <source>RegionPage --- Back to Connect page</source>
        <extracomment>Screen reader description of the &quot;Back&quot; button in the header when the user is on the Region page. This is a slightly longer description of the button&apos;s action, which in this case returns to the Connect page.</extracomment>
        <translation>Powrót do strony Połączenia</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/region/RegionPage.qml" line="66"/>
        <source>RegionPage --- Region list sort</source>
        <extracomment>Screen reader annotation for the &quot;Name / Latency&quot; heading above the region list, which sorts by either name or latency. The screen reader will indicate that this is a group of controls.</extracomment>
        <translation>Sortowanie listy regionów</translation>
    </message>
</context>
<context>
    <name>RegionRowBase</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/region/RegionRowBase.qml" line="130"/>
        <source>RegionRowBase --- %1, does not support port forwarding</source>
        <extracomment>Screen reader annotation used for a region that does not support port forwarding when the feature is enabled. Corresponds to the &quot;slashed-arrow&quot; indicator and &quot;Port forwarding is not supported by this region/country.&quot; tips. %1 is a translated region name. The region name should come first so the screen reader reads it first.</extracomment>
        <translation>Sortowanie listy regionów</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/region/RegionRowBase.qml" line="149"/>
        <source>RegionRowBase --- Favorite region</source>
        <extracomment>Screen reader annotation for the &quot;favorite&quot; button (heart icon) next to regions in the regions list. (The screen reader will indicate whether the button is &quot;on&quot; or &quot;off&quot;.)</extracomment>
        <translation>Ulubiony region</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/region/RegionRowBase.qml" line="271"/>
        <source>RegionRowBase --- %1 ms</source>
        <translation>%1 ms</translation>
    </message>
</context>
<context>
    <name>SettingsMessages</name>
    <message>
        <location filename="../../../../../client/res/components/settings/SettingsMessages.qml" line="15"/>
        <source>SettingsMessages --- Restart your computer to finish installing the split tunnel filter.</source>
        <translation>Uruchom ponownie komputer, aby zakończyć instalację filtru podzielonych tuneli.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/SettingsMessages.qml" line="17"/>
        <source>SettingsMessages --- The split tunnel filter could not be installed.  Try restarting your computer, or contact support if this problem persists.</source>
        <translation>Nie można zainstalować filtru podzielonych tuneli. Spróbuj ponownie uruchomić komputer lub skontaktuj się obsługą, jeśli problem będzie się utrzymywał.</translation>
    </message>
    <message>
    <source>SettingsMessages --- This feature requires macOS 10.13 or later.</source>
        <translation>Ta funkcja wymaga  macOS 10.13 lub późniejszej wersji.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/SettingsMessages.qml" line="20"/>
        <source>SettingsMessages --- This feature requires Windows 7 Service Pack 1 or later.</source>
        <translation>Ta funkcja wymaga Windows 7 Service Pack 1 lub późniejszej wersji.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/SettingsMessages.qml" line="21"/>
        <source>SettingsMessages --- This feature requires iptables 1.6.1 or later.</source>
        <translation>Ta funkcja wymaga iptables w wersji 1.6.1 lub nowszej.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/SettingsMessages.qml" line="25"/>
        <source>SettingsMessages --- This feature requires net_cls to be available at %1.</source>
        <extracomment>Message for Linux indicating that a kernel feature has to be mounted at a specific location to use the split tunnel feature. %1 is a file path, currently /sys/fs/cgroups/net_cls.</extracomment>
        <translation>Ta funkcja wymaga dostępności net_cls to w %1.</translation>
    </message>
</context>
<context>
    <name>SettingsModule</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/settings/SettingsModule.qml" line="17"/>
        <source>SettingsModule --- Quick Settings tile</source>
        <extracomment>Screen reader annotation for the Quick Settings tile.</extracomment>
        <translation>Płytka Szybkich ustawień</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/settings/SettingsModule.qml" line="25"/>
        <source>SettingsModule --- QUICK SETTINGS</source>
        <translation>SZYBKIE USTAWIENIA</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/settings/SettingsModule.qml" line="55"/>
        <source>SettingsModule --- Desktop Notifications</source>
        <translation>Powiadomienia na pulpicie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/settings/SettingsModule.qml" line="61"/>
        <source>SettingsModule --- MACE</source>
        <translation>MACE</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/settings/SettingsModule.qml" line="68"/>
        <source>SettingsModule --- Port Forwarding</source>
        <translation>Przekierowywanie portu</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/settings/SettingsModule.qml" line="74"/>
        <source>SettingsModule --- Allow LAN</source>
        <translation>Zezwól na LAN</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/settings/SettingsModule.qml" line="81"/>
        <source>SettingsModule --- Debug Logging</source>
        <translation>Zapisywanie w dzienniku debugowania</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/settings/SettingsModule.qml" line="99"/>
        <source>SettingsModule --- Light Theme</source>
        <translation>Jasny motyw</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/settings/SettingsModule.qml" line="110"/>
        <source>SettingsModule --- View All Settings...</source>
        <translation>Wyświetl wszystkie ustawienia...</translation>
    </message>
</context>
<context>
    <name>SettingsWindow</name>
    <message>
        <location filename="../../../../../client/res/components/settings/SettingsWindow.qml" line="50"/>
        <extracomment>setting-title</extracomment>
<source>SettingsWindow -- setting-title --- General</source>
        <comment>setting-title</comment>
        <translation>Ogólne</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/SettingsWindow.qml" line="51"/>
        <extracomment>setting-title</extracomment>
<source>SettingsWindow -- setting-title --- Account</source>
        <comment>setting-title</comment>
        <translation>Konto</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/SettingsWindow.qml" line="52"/>
        <extracomment>setting-title</extracomment>
<source>SettingsWindow -- setting-title --- Privacy</source>
        <comment>setting-title</comment>
        <translation>Prywatność</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/SettingsWindow.qml" line="53"/>
        <extracomment>setting-title</extracomment>
<source>SettingsWindow -- setting-title --- Network</source>
        <comment>setting-title</comment>
        <translation>Sieć</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/SettingsWindow.qml" line="54"/>
        <extracomment>setting-title</extracomment>
<source>SettingsWindow -- setting-title --- Connection</source>
        <comment>setting-title</comment>
        <translation>Połączenie</translation>
    </message>
    <message>
    <source>SettingsWindow -- setting-title --- Proxy</source>
        <extracomment>setting-title</extracomment>
        <translation>Proxy</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/SettingsWindow.qml" line="55"/>
        <extracomment>setting-title</extracomment>
<source>SettingsWindow -- setting-title --- Help</source>
        <comment>setting-title</comment>
        <translation>Pomoc</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/SettingsWindow.qml" line="58"/>
        <extracomment>setting-heading</extracomment>
<source>SettingsWindow -- setting-heading --- General Preferences</source>
        <comment>setting-heading</comment>
        <translation>Preferencje ogólne</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/SettingsWindow.qml" line="59"/>
        <extracomment>setting-heading</extracomment>
<source>SettingsWindow -- setting-heading --- Account Information</source>
        <comment>setting-heading</comment>
        <translation>Informacje o koncie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/SettingsWindow.qml" line="60"/>
        <extracomment>setting-heading</extracomment>
<source>SettingsWindow -- setting-heading --- Privacy Preferences</source>
        <comment>setting-heading</comment>
        <translation>Preferencje prywatności</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/SettingsWindow.qml" line="61"/>
        <extracomment>setting-heading</extracomment>
<source>SettingsWindow -- setting-heading --- Network Preferences</source>
        <comment>setting-heading</comment>
        <translation>Preferencje sieci</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/SettingsWindow.qml" line="62"/>
        <extracomment>setting-heading</extracomment>
<source>SettingsWindow -- setting-heading --- Connection Preferences</source>
        <comment>setting-heading</comment>
        <translation>Preferencje połączenia</translation>
    </message>
    <message>
    <source>SettingsWindow -- setting-heading --- Proxy Preferences</source>
        <extracomment>setting-heading</extracomment>
        <translation>Preferencje serwera proxy</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/SettingsWindow.qml" line="63"/>
        <extracomment>setting-heading</extracomment>
<source>SettingsWindow -- setting-heading --- Help</source>
        <comment>setting-heading</comment>
        <translation>Pomoc</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/SettingsWindow.qml" line="124"/>
        <source>SettingsWindow --- Alert</source>
        <translation>Alert</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/SettingsWindow.qml" line="158"/>
        <source>SettingsWindow --- Settings</source>
        <translation>Ustawienia</translation>
    </message>
</context>
<context>
    <name>SnoozeModule</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/SnoozeModule.qml" line="18"/>
        <source>SnoozeModule --- VPN Snooze tile</source>
        <extracomment>Screen reader annotation for the Snooze tile</extracomment>
        <translation>Kafelek drzemki VPN</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/SnoozeModule.qml" line="35"/>
        <source>SnoozeModule --- RESUMING CONNECTION</source>
        <translation>WZNAWIANIE POŁĄCZENIA</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/SnoozeModule.qml" line="37"/>
        <source>SnoozeModule --- SNOOZED</source>
        <translation>UŚPIONA</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/SnoozeModule.qml" line="39"/>
        <source>SnoozeModule --- SNOOZING</source>
        <translation>DRZEMKA</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/SnoozeModule.qml" line="42"/>
        <source>SnoozeModule --- VPN SNOOZE</source>
        <translation>DRZEMKA VPN</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/SnoozeModule.qml" line="182"/>
        <source>SnoozeModule --- Decrease snooze time</source>
        <extracomment>Screen reader name for the &quot;minus&quot; button that decreases snooze time</extracomment>
        <translation>Skróć czas drzemki</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/SnoozeModule.qml" line="205"/>
        <source>SnoozeModule --- Snooze time</source>
        <extracomment>Screen reader annotation for the snooze time display in the Snooze tile</extracomment>
        <translation>Czas drzemki</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/SnoozeModule.qml" line="254"/>
        <source>SnoozeModule --- Increase snooze time</source>
        <extracomment>Screen reader name for the &quot;plus&quot; button that increases snooze time</extracomment>
        <translation>Wydłuż czas drzemki</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/SnoozeModule.qml" line="304"/>
        <source>SnoozeModule --- Snooze</source>
        <translation>Drzemka</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/SnoozeModule.qml" line="311"/>
        <source>SnoozeModule --- Resume</source>
        <translation>Wznów</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/SnoozeModule.qml" line="332"/>
        <source>SnoozeModule --- Snooze temporarily disconnects the VPN and automatically reconnects when the timer elapses.</source>
        <translation>Snooze chwilowo odłącza VPN i automatycznie wznawia połączenie po upływie zadanego czasu.</translation>
    </message>
</context>
<context>
    <name>SplashContent</name>
    <message>
        <location filename="../../../../../client/res/components/splash/SplashContent.qml" line="91"/>
        <source>SplashContent --- Send Logs</source>
        <translation>Wyślij dzienniki</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/splash/SplashContent.qml" line="112"/>
        <source>SplashContent --- Reinstall</source>
        <translation>Zainstaluj ponownie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/splash/SplashContent.qml" line="135"/>
        <source>SplashContent --- Quit</source>
        <translation>Zamknij</translation>
    </message>
</context>
<context>
    <name>SplashPopup</name>
    <message>
        <location filename="../../../../../client/res/components/splash/SplashPopup.qml" line="40"/>
        <source>SplashPopup --- Quit</source>
        <translation>Zamknij</translation>
    </message>
</context>
<context>
    <name>SplitTunnelAddAppRow</name>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelAddAppRow.qml" line="59"/>
        <source>SplitTunnelAddAppRow --- Add Application</source>
        <translation>Dodaj aplikację</translation>
    </message>
</context>
<context>
    <name>SplitTunnelAppDialog</name>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelAppDialog.qml" line="75"/>
        <source>SplitTunnelAppDialog --- Only executable files can be excluded from VPN. Please select an executable program or shell script.</source>
        <translation>Tylko pliki wykonywalne mogą być wykluczone z VPN. Wybierz program wykonywalny lub skrypt powłoki.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelAppDialog.qml" line="75"/>
        <source>SplitTunnelAppDialog --- Unable to exclude application</source>
        <translation>Nie można wykluczyć aplikacji</translation>
    </message>
    <message>
    <source>SplitTunnelAppDialog --- Add</source>
        <translation>Dodaj</translation>
    </message>
    <message>
    <source>SplitTunnelAppDialog --- Exclude</source>
        <translation>Wyklucz</translation>
    </message>
    <message>
    <source>SplitTunnelAppDialog --- Cancel</source>
        <translation>Anuluj</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelAppDialog.qml" line="137"/>
        <source>SplitTunnelAppDialog --- Add Application</source>
        <translation>Dodaj aplikację</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelAppDialog.qml" line="180"/>
        <source>SplitTunnelAppDialog --- Search</source>
        <translation>Szukaj</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelAppDialog.qml" line="193"/>
        <source>SplitTunnelAppDialog --- Browse</source>
        <translation>Przeglądaj</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelAppDialog.qml" line="245"/>
        <source>SplitTunnelAppDialog --- Applications</source>
        <translation>Aplikacje</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelAppDialog.qml" line="461"/>
        <source>SplitTunnelAppDialog --- App list, loading</source>
        <extracomment>Screen reader annotation for the &quot;application list&quot; from which a user can select an application to exclude. Screen reader annotation used for the split tunnel app list when the apps are still being loaded.</extracomment>
        <translation>Lista aplikacji, wczytywanie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelAppDialog.qml" line="464"/>
        <source>SplitTunnelAppDialog --- App list</source>
        <extracomment>Screen reader annotation for the split tunnel app list.</extracomment>
        <translation>Lista aplikacji</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelAppDialog.qml" line="470"/>
        <source>SplitTunnelAppDialog --- App</source>
        <extracomment>Screen reader annotation for the column listing the application in the existing application list (this table has only one column)</extracomment>
        <translation>Aplikacja</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelAppDialog.qml" line="496"/>
        <source>SplitTunnelAppDialog --- Refresh</source>
        <translation>Odśwież</translation>
    </message>
</context>
<context>
    <name>SplitTunnelAppRow</name>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelAppRow.qml" line="120"/>
        <source>SplitTunnelAppRow --- Remove</source>
        <extracomment>Screen reader annotation for the &quot;remove&quot; button (&quot;X&quot; icon) next to a split tunnel app rule. (Should be labeled like a normal command button.)</extracomment>
        <translation>Usuń</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/settings/pages/SplitTunnelAppRow.qml" line="157"/>
        <source>SplitTunnelAppRow --- Microsoft Store app</source>
        <translation>Aplikacja Microsoft Store</translation>
    </message>
</context>
<context>
    <name>TabLayoutCommon</name>
    <message>
        <location filename="../../../../../client/res/components/settings/tabs/TabLayoutCommon.qml" line="8"/>
        <source>TabLayoutCommon --- Settings tabs</source>
        <extracomment>Screen reader annotation for the group of tabs in the Settings window.</extracomment>
        <translation>Karty ustawień</translation>
    </message>
</context>
<context>
    <name>ThemedTextField</name>
    <message>
        <location filename="../../../../../client/res/components/common/ThemedTextField.qml" line="74"/>
        <source>ThemedTextField --- Undo</source>
        <translation>Cofnij</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ThemedTextField.qml" line="82"/>
        <source>ThemedTextField --- Redo</source>
        <translation>Ponów</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ThemedTextField.qml" line="93"/>
        <source>ThemedTextField --- Cut</source>
        <translation>Wytnij</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ThemedTextField.qml" line="101"/>
        <source>ThemedTextField --- Copy</source>
        <translation>Kopiuj</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ThemedTextField.qml" line="109"/>
        <source>ThemedTextField --- Paste</source>
        <translation>Wklej</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ThemedTextField.qml" line="117"/>
        <source>ThemedTextField --- Delete</source>
        <translation>Usuń</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/ThemedTextField.qml" line="126"/>
        <source>ThemedTextField --- Select All</source>
        <translation>Wybierz wszystkie</translation>
    </message>
</context>
<context>
    <name>TrayIcon</name>
    <message>
        <location filename="../../../../../client/res/components/common/TrayIcon.qml" line="46"/>
        <source>TrayIcon --- Private Internet Access</source>
        <translation>Private Internet Access</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayIcon.qml" line="50"/>
        <source>TrayIcon --- Resuming Connection...</source>
        <translation>Wznawianie połączenia</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayIcon.qml" line="52"/>
        <source>TrayIcon --- Snoozing...</source>
        <translation>Drzemka</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayIcon.qml" line="54"/>
        <source>TrayIcon --- Snoozed</source>
        <translation>Uśpiona</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayIcon.qml" line="60"/>
        <source>TrayIcon --- Connected to %1</source>
        <translation>Połączono z %1</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayIcon.qml" line="63"/>
        <source>TrayIcon --- Reconnecting...</source>
        <translation>Ponowne łączenie...</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayIcon.qml" line="65"/>
        <source>TrayIcon --- Connecting...</source>
        <translation>Łączenie...</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayIcon.qml" line="67"/>
        <source>TrayIcon --- Disconnecting...</source>
        <translation>Rozłączanie...</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayIcon.qml" line="72"/>
        <source>TrayIcon --- Killswitch Active</source>
        <translation>Wyłącznik awaryjny aktywny</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayIcon.qml" line="74"/>
        <source>TrayIcon --- Update Available</source>
        <translation>Dostępna aktualizacja</translation>
    </message>
</context>
<context>
    <name>TrayManager</name>
    <message>
        <location filename="../../../../../client/res/components/common/TrayManager.qml" line="61"/>
        <source>TrayManager --- Snoozing</source>
        <translation>Drzemka</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayManager.qml" line="64"/>
        <source>TrayManager --- Resuming Connection</source>
        <translation>Wznawianie połączenia</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayManager.qml" line="67"/>
        <source>TrayManager --- Snoozed</source>
        <translation>Uśpiona</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayManager.qml" line="84"/>
        <source>TrayManager --- Internet access has been disabled by the killswitch.</source>
        <translation>Dostęp do internetu został wyłączony przez wyłącznik awaryjny.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayManager.qml" line="87"/>
        <source>TrayManager --- Disconnected from %1</source>
        <translation>Rozłączono z %1</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayManager.qml" line="88"/>
        <source>TrayManager --- Disconnected</source>
        <translation>Rozłączono</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayManager.qml" line="91"/>
        <source>TrayManager --- Connected to %1</source>
        <translation>Połączono z %1</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayManager.qml" line="106"/>
        <source>TrayManager --- Forwarded port %1</source>
        <translation>Przekierowany port %1</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayManager.qml" line="119"/>
        <source>TrayManager --- Port forward request failed</source>
        <translation>Żądanie przekierowania portu nie powiodło się</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayManager.qml" line="138"/>
        <source>TrayManager --- Reconnecting to %1...</source>
        <translation>Ponowne łączenie z %1...</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayManager.qml" line="140"/>
        <source>TrayManager --- Connecting to %1...</source>
        <translation>Łączenie z %1...</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayManager.qml" line="144"/>
        <source>TrayManager --- Disconnecting from %1...</source>
        <translation>Rozłączanie z %1...</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayManager.qml" line="145"/>
        <source>TrayManager --- Disconnecting...</source>
        <translation>Rozłączanie...</translation>
    </message>
</context>
<context>
    <name>TrayMenuBuilder</name>
    <message>
        <location filename="../../../../../client/res/components/common/Messages.qml" line="16"/>
        <source>TrayMenuBuilder --- Help</source>
        <extracomment>Help label used for the Help tray menu as well as help links on some settings</extracomment>
        <translation>Pomoc</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="47"/>
        <source>TrayMenuBuilder --- Show Window</source>
        <extracomment>Menu command to display the main app window/dashboard.</extracomment>
        <translation>Pokaż Okno</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="54"/>
        <source>TrayMenuBuilder --- Resume Connection</source>
        <translation>Wznów połączenie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="57"/>
        <source>TrayMenuBuilder --- Connect (Auto)</source>
        <extracomment>Menu command to connect to an automatically chosen region.</extracomment>
        <translation>Połącz (Automatycznie)</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="59"/>
        <source>TrayMenuBuilder --- Connect (%1)</source>
        <extracomment>Menu command to connect to a specific bookmarked region, with the region name in parentheses.</extracomment>
        <translation>Połącz (%1)</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="71"/>
        <source>TrayMenuBuilder --- Disconnect</source>
        <extracomment>Menu command to disconnect from the VPN.</extracomment>
        <translation>Rozłącz</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="74"/>
        <source>TrayMenuBuilder --- Snooze</source>
        <translation>Drzemka</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="75"/>
        <source>TrayMenuBuilder --- 5 Minutes</source>
        <translation>5 minut</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="76"/>
        <source>TrayMenuBuilder --- 10 Minutes</source>
        <translation>10 minut</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="77"/>
        <source>TrayMenuBuilder --- 15 Minutes</source>
        <translation>15 minut</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="78"/>
        <source>TrayMenuBuilder --- 30 Minutes</source>
        <translation>30 minut</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="123"/>
        <source>TrayMenuBuilder --- Connect to</source>
        <extracomment>Menu label for a submenu containing a list of regions to connect to.</extracomment>
        <translation>Połącz z</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="129"/>
        <source>TrayMenuBuilder --- Log In</source>
        <extracomment>Menu command to display the main app window where the user can log in.</extracomment>
        <translation>Zaloguj</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="140"/>
        <source>TrayMenuBuilder --- Settings...</source>
        <extracomment>Menu command to open the settings dialog.</extracomment>
        <translation>Ustawienia...</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="144"/>
        <source>TrayMenuBuilder --- Enable Debug Logging</source>
        <extracomment>Menu label for a submenu containing help and support items. Menu command to enable or disable debug logging, which stores additional information that help developers identify and debug problems.</extracomment>
        <translation>Włącz logowanie z debugowaniem</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="146"/>
        <source>TrayMenuBuilder --- Submit Debug Logs...</source>
        <extracomment>Menu command to open a dialog that lets the user submit collected debug logs to developers for debugging.</extracomment>
        <translation>Wyślij dzienniki debugowania...</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="149"/>
        <source>TrayMenuBuilder --- Changelog</source>
        <extracomment>Menu command to display a list of changes introduced in each version of the application.</extracomment>
        <translation>Dziennik zmian</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="152"/>
        <source>TrayMenuBuilder --- Support Portal</source>
        <extracomment>Menu command to open the support portal website in the user&apos;s browser.</extracomment>
        <translation>Portal obsługi technicznej</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="154"/>
        <source>TrayMenuBuilder --- Blog</source>
        <extracomment>Menu command to open the company blog website in the user&apos;s browser.</extracomment>
        <translation>Blog</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="162"/>
        <source>TrayMenuBuilder --- Copy Public IP (%1)</source>
        <extracomment>Menu command to copy the user&apos;s current public IP address to the clipboard. The %1 placeholder contains the IP address, e.g. &quot;10.0.23.45&quot;.</extracomment>
        <translation>Kopiuj publiczny IP (%1)</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="168"/>
        <source>TrayMenuBuilder --- Copy Public IP</source>
        <extracomment>Menu command to copy the user&apos;s current public IP address to the clipboard. This variation should match the &quot;Copy Public IP (%1)&quot; string, but omits the parenthesis and is shown grayed out, used when disconnected.</extracomment>
        <translation>Kopiuj publiczny IP</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="176"/>
        <source>TrayMenuBuilder --- Copy Forwarded Port (%1)</source>
        <extracomment>Menu command to copy the port number that is currently being forwarded (from the VPN to the user&apos;s computer) to the clipboard. The %1 placeholder contains the port number, e.g. &quot;47650&quot;.</extracomment>
        <translation>Kopiuj przekierowany port (%1)</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="184"/>
        <source>TrayMenuBuilder --- Copy Forwarded Port</source>
        <extracomment>Menu command to copy the port number that is currently being forwarded (from the VPN to the user&apos;s computer) to the clipboard. This variation should match the &quot;Copy Forwarded Port (%1)&quot; string, but omits the parenthesis and is shown grayed out, used when port forwarding is not available.</extracomment>
        <translation>Kopiuj przekierowany port</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/TrayMenuBuilder.qml" line="190"/>
        <source>TrayMenuBuilder --- Quit</source>
        <extracomment>Menu command to quit the application.</extracomment>
        <translation>Zamknij</translation>
    </message>
</context>
<context>
    <name>UpdateNotificationStatus</name>
    <message>
        <location filename="../../../../../client/res/components/common/UpdateNotificationStatus.qml" line="75"/>
        <source>UpdateNotificationStatus --- Download of v%1 failed</source>
        <translation>Pobieranie v%1 nie powiodło się</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/UpdateNotificationStatus.qml" line="80"/>
        <source>UpdateNotificationStatus --- Ready to install v%1</source>
        <translation>Gotowy do zainstalowania v%1</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/UpdateNotificationStatus.qml" line="109"/>
        <source>UpdateNotificationStatus --- Download v%1</source>
        <translation>Pobierz v%1</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/UpdateNotificationStatus.qml" line="111"/>
        <source>UpdateNotificationStatus --- (%2%) Install v%1</source>
        <translation>(%2%) Instaluj v%1</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/UpdateNotificationStatus.qml" line="114"/>
        <source>UpdateNotificationStatus --- Install v%1</source>
        <translation>Instaluj v%1</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/UpdateNotificationStatus.qml" line="142"/>
        <source>UpdateNotificationStatus --- Version %1 is available.</source>
        <translation>Wersja %1 jest dostępna.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/UpdateNotificationStatus.qml" line="144"/>
        <source>UpdateNotificationStatus --- Downloading v%1...</source>
        <translation>Pobieranie v%1...</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/UpdateNotificationStatus.qml" line="146"/>
        <source>UpdateNotificationStatus --- Ready to install v%1.</source>
        <translation>Gotowy do zainstalowania v%1.</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/UpdateNotificationStatus.qml" line="158"/>
        <source>UpdateNotificationStatus --- Download</source>
        <translation>Pobierz</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/UpdateNotificationStatus.qml" line="165"/>
        <source>UpdateNotificationStatus --- Install</source>
        <translation>Instaluj</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/common/UpdateNotificationStatus.qml" line="219"/>
        <source>UpdateNotificationStatus --- Version %1 is available</source>
        <translation>Wersja %1 jest dostępna</translation>
    </message>
</context>
<context>
    <name>UsageModule</name>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/UsageModule.qml" line="14"/>
        <source>UsageModule --- Usage tile</source>
        <extracomment>Screen reader annotation for the Usage tile.</extracomment>
        <translation>Płytka Wykorzystania</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/UsageModule.qml" line="19"/>
        <source>UsageModule --- %1 MB</source>
        <translation>%1 MB</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/UsageModule.qml" line="23"/>
        <source>UsageModule --- USAGE</source>
        <translation>ZUŻYCIE</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/UsageModule.qml" line="34"/>
        <source>UsageModule --- Download</source>
        <translation>Pobieranie</translation>
    </message>
    <message>
        <location filename="../../../../../client/res/components/dashboard/connect/modules/UsageModule.qml" line="56"/>
        <source>UsageModule --- Upload</source>
        <translation>Przesyłanie</translation>
    </message>
</context>
<context>
    <name>winstaller</name>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="37"/>
        <source>winstaller --- Private Internet Access Installer</source>
        <translation>Instalator Private Internet Access</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="38"/>
        <source>winstaller --- %.0f SECONDS REMAINING</source>
        <translation>%.0f SEKUND POZOSTAŁO</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="40"/>
        <source>winstaller --- INSTALL</source>
        <translation>INSTALUJ</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="41"/>
        <source>winstaller --- UNINSTALL</source>
        <translation>ODINSTALUJ</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="42"/>
        <source>winstaller --- FINISH</source>
        <translation>ZAKOŃCZ</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="44"/>
        <source>winstaller --- PREPARING</source>
        <translation>PRZYGOTOWYWANIE</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="45"/>
        <source>winstaller --- READY TO INSTALL</source>
        <translation>GOTOWY DO INSTALACJI</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="46"/>
        <source>winstaller --- INSTALLING</source>
        <translation>INSTALOWANIE</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="47"/>
        <source>winstaller --- ABORTING</source>
        <translation>PRZERYWANIE</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="48"/>
        <source>winstaller --- FINISHING UP</source>
        <translation>KOŃCZENIE</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="49"/>
        <source>winstaller --- CLEANING UP</source>
        <translation>CZYSZCZENIE</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="50"/>
        <source>winstaller --- ROLLING BACK CHANGES</source>
        <translation>COFANIE ZMIAN</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="51"/>
        <source>winstaller --- FINISHED</source>
        <translation>ZAKOŃCZONO</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="52"/>
        <source>winstaller --- ABORTED</source>
        <translation>PRZERWANO</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="53"/>
        <source>winstaller --- UNPACKING</source>
        <translation>ROZPAKOWYWANIE</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="54"/>
        <source>winstaller --- COPYING FILES</source>
        <translation>KOPIOWANIE PLIKÓW</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="55"/>
        <source>winstaller --- SHUTTING DOWN CLIENT</source>
        <translation>ZAMYKANIE KLIENTA</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="56"/>
        <source>winstaller --- STOPPING SERVICE</source>
        <translation>ZATRZYMYWANIE USŁUGI</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="57"/>
        <source>winstaller --- UNREGISTERING SERVICE</source>
        <translation>WYREJESTROWYWANIE USŁUGI</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="58"/>
        <source>winstaller --- REGISTERING SERVICE</source>
        <translation>REJESTROWANIE USŁUGI</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="59"/>
        <source>winstaller --- STARTING SERVICE</source>
        <translation>URUCHAMIANIE USŁUGI</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="60"/>
        <source>winstaller --- REMOVING NETWORK ADAPTER</source>
        <translation>USUWANIE KARTY SIECIOWEJ</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="61"/>
        <source>winstaller --- INSTALLING NETWORK ADAPTER</source>
        <translation>INSTALOWANIE KARTY SIECIOWEJ</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="62"/>
        <source>winstaller --- BACKING UP FILES</source>
        <translation>ZAPISYWANIE BACKUPU PLIKÓW</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="63"/>
        <source>winstaller --- REMOVING PREVIOUS VERSION</source>
        <translation>USUWANIE POPRZEDNIEJ WERSJI</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="64"/>
        <source>winstaller --- REMOVING FILES</source>
        <translation>USUWANIE PLIKÓW</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="65"/>
        <source>winstaller --- REMOVING CALLOUT DRIVER</source>
        <translation>USUWANIE STEROWNIKA WYWOŁAŃ</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="66"/>
        <source>winstaller --- UPDATING CALLOUT DRIVER</source>
        <translation>AKTUALIZACJA STEROWNIKA WYWOŁAŃ</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="68"/>
        <source>winstaller --- Unable to recognize the existing installation. Would you like to delete the entire directory?</source>
        <translation>Nie można rozpoznać istniejącej instalacji. Czy chcesz usunąć cały katalog?</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="69"/>
        <source>winstaller --- Corrupt installation detected</source>
        <translation>Wykryto uszkodzoną instalację</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="70"/>
        <source>winstaller --- There are stray files in the installation directory. Would you like to delete them?</source>
        <translation>W katalogu instalacyjnym znajdują się kopie plików już nie istniejących. Czy chcesz je usunąć?</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="71"/>
        <source>winstaller --- Files remaining</source>
        <translation>Pozostałe pliki</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="72"/>
        <source>winstaller --- Do you want to abort the installation?</source>
        <translation>Czy chcesz przerwać instalację?</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="73"/>
        <source>winstaller --- Abort installation?</source>
        <translation>Przerwać instalację?</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="74"/>
        <source>winstaller --- Error</source>
        <translation>Błąd</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="75"/>
        <source>winstaller --- This will replace your existing installation of Private Internet Access. Downgrading afterwards will require a clean reinstall. Do you wish to continue?</source>
        <translation>To zastąpi Twoją istniejącą instalację Private Internet Access. Powrót do wcześniejszej wersji później będzie wymagało wyczyszczenia i ponownej instalacji. Czy chcesz kontynuować?</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="76"/>
        <source>winstaller --- Replace existing version?</source>
        <translation>Zastąpić istniejącą wersję?</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="77"/>
        <source>winstaller --- Unable to remove directory: %s</source>
        <translation>Nie można usunąć katalogu: %s</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="78"/>
        <source>winstaller --- Please exit the existing Private Internet Access before proceeding.</source>
        <translation>Zamknij istniejący program Private Internet Access przed kontynuacją.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="79"/>
        <source>winstaller --- There was a problem uninstalling the existing version.</source>
        <translation>Wystąpił problem podczas odinstalowywania istniejącej wersji.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="80"/>
        <source>winstaller --- There are still clients running.</source>
        <translation>Wciąż istnieją działający klienci.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="81"/>
        <source>winstaller --- Failed to stop the service.</source>
        <translation>Zatrzymywanie usługi nie powiodło się.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="82"/>
        <source>winstaller --- A reboot is needed before installation can proceed.</source>
        <translation>Wymagane jest ponowne uruchomienie, aby kontynuować instalację.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="83"/>
        <source>winstaller --- Service executable missing.</source>
        <translation>Brak pliku wykonywalnego usługi.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="84"/>
        <source>winstaller --- Service uninstallation failed.</source>
        <translation>Odinstalowywanie usługi nie powiodło się.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="85"/>
        <source>winstaller --- The service installation failed.</source>
        <translation>Instalacja usługi nie powiodła się.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="86"/>
        <source>winstaller --- The service failed to start.</source>
        <translation>Uruchomienie usługi nie powiodło się.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="87"/>
        <source>winstaller --- Error uninstalling TAP driver.</source>
        <translation>Błąd odinstalowywania sterownika TAP.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="88"/>
        <source>winstaller --- The TAP driver was not approved for installation.</source>
        <translation>Sterownik TAP nie został zatwierdzony do instalacji.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="89"/>
        <source>winstaller --- The TAP driver installation failed.</source>
        <translation>Instalacja sterownika TAP nie powiodła się.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="90"/>
        <source>winstaller --- Private Internet Access requires at least Windows 7 to run.</source>
        <translation>Private Internet Access wymaga co najmniej Windows 7 do uruchomienia.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="91"/>
        <source>winstaller --- The 32-bit version of Private Internet Access can only run on a 32-bit version of Windows.</source>
        <translation>32-bitowa wersja Private Internet Access może działać tylko w 32-bitowej wersji systemu Windows.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="92"/>
        <source>winstaller --- Failed to retrieve shell folder %s.</source>
        <translation>Nie można pobrać folderu powłoki %s.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="93"/>
        <source>winstaller --- Out of memory.</source>
        <translation>Brak pamięci.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="94"/>
        <source>winstaller --- Payload decompression error.</source>
        <translation>Błąd dekompresji ładunku.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="95"/>
        <source>winstaller --- Corrupted payload (CRC error).</source>
        <translation>Uszkodzony ładunek (błąd CRC).</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="96"/>
        <source>winstaller --- Unable to create file: %s</source>
        <translation>Nie można utworzyć pliku: %s</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="97"/>
        <source>winstaller --- Unable to write file: %s</source>
        <translation>Nie można zapisać pliku: %s</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="98"/>
        <source>winstaller --- Unable to write entire file: %s</source>
        <translation>Nie można zapisać całego pliku: %s</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="99"/>
        <source>winstaller --- Unable to initialize decompressor.</source>
        <translation>Nie można zainicjować dekompresora.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="100"/>
        <source>winstaller --- Corrupted payload (invalid parameters).</source>
        <translation>Uszkodzony ładunek (nieprawidłowe parametry).</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="101"/>
        <source>winstaller --- Unable to move %s</source>
        <translation>Nie można przenieść %s</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="102"/>
        <source>winstaller --- Unable to create rollback directory. If you proceed, the installation can&apos;t undo any changes if there&apos;s an error.</source>
        <translation>Nie można utworzyć katalogu wycofania. Jeśli będziesz kontynuować, instalacja nie będzie mogła cofnąć żadnych zmian, jeśli wystąpi błąd.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="103"/>
        <source>winstaller --- Unable to create directory: %s</source>
        <translation>Nie można utworzyć katalogu: %s</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="104"/>
        <source>winstaller --- The installer does not contain a recognizable payload.</source>
        <translation>Instalator nie zawiera rozpoznawalnego ładunku.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="105"/>
        <source>winstaller --- Missing payload</source>
        <translation>Brak ładunku</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="106"/>
        <source>winstaller --- Error uninstalling callout driver.</source>
        <translation>Błąd odinstalowywania sterownika wywołań.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="107"/>
        <source>winstaller --- Callout driver installation failed.</source>
        <translation>Nieudana instalacja sterownika wywołań.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="109"/>
        <source>winstaller --- The installation will now abort.</source>
        <translation>Instalacja zostanie teraz przerwana.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="110"/>
        <location filename="../../../../../extras/installer/win/strings.rc" line="114"/>
        <source>winstaller --- This is preventing the installation from proceeding.</source>
        <translation>Zapobiega to kontynuowaniu instalacji.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="111"/>
        <source>winstaller --- Do you wish to continue the installation anyway?</source>
        <translation>Czy mimo to chcesz kontynuować instalację?</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="112"/>
        <source>winstaller --- You can retry or attempt to continue the installation anyway.</source>
        <translation>Możesz spróbować ponownie lub spróbować kontynuować instalację.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="113"/>
        <source>winstaller --- The uninstallation will now abort.</source>
        <translation>Deinstalacja zostanie przerwana.</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="115"/>
        <source>winstaller --- Do you wish to continue the uninstallation anyway?</source>
        <translation>Czy mimo to chcesz kontynuować odinstalowywanie?</translation>
    </message>
    <message>
        <location filename="../../../../../extras/installer/win/strings.rc" line="116"/>
        <source>winstaller --- You can retry or attempt to continue the uninstallation anyway.</source>
        <translation>Możesz mimo to spróbować ponownie lub spróbować kontynuować odinstalowywanie.</translation>
    </message>
</context>
</TS>