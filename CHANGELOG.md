# Changelog

### v1.7
* The Shadowsocks proxy setting can be used to redirect the VPN connection through a Shadowsocks region
* Added the '{{BRAND_CODE}}ctl monitor' command
* Added the 'connectionstate' type to '{{BRAND_CODE}}ctl get'
* Improved firewall rules on Linux to mitigate CVE-2019-14899 on affected distributions
* Improved handling of crashes caused by graphics drivers on Windows
* Fixed an issue preventing apps from being selected for App Exclusions on macOS 10.15
* Fixed an issue causing Windows 10 1507 / LTSB 2015 to restart on shutdown

### v1.6.1
* Security improvements in the Mac OS installer

### v1.6
* VPN Snooze allows temporarily disconnecting the VPN connection.
* Added "{{BRAND_CODE}}ctl" - a command-line interface to control the client.
* Connection loss is detected more quickly.
* Fixed issues in the App Exclusions feature that could occur when switching network connections.
* App Exclusions supports macOS 10.12.
* Fixed detection of the iptables version for some Linux distributions.
* App Exclusions is improved for listening sockets on Linux.
* The dashboard repositions correctly if the screen resolution changes on macOS.
* Fixed an issue that could cause long delays when the client starts on login.
* Security improvements.

### v1.5.1
* Added a "Help" link to the App Exclusions feature in Settings

### v1.5
* Split tunneling allows applications to bypass the VPN using the App Exclusions feature.
* Excluded applications bypass the VPN and connect directly to the Internet.
* Windows: This feature currently requires Windows 7 SP1.  Support for Windows Store apps requires Windows 10.
* Mac: This feature currently requires macOS 10.13.
* Linux: This feature currently requires iptables 1.6.1 with systemd network control groups on Linux.

### v1.4
* Support connecting via a SOCKS5 proxy
* Notarize application on Mac for compatibility with 10.15
* Update Mac installer to improve compatibility with 10.15
* Minor translation fix for French
* Minor firewall rule fix on Windows

### v1.3.3
* Support both DHCP-based configuration (like 1.2.1) and static configuration (like 1.3.1) on Windows
* Update Handshake to fix linkage on some Linux distributions and with an additional seed

### v1.3.2
* Use DHCP-based configuration of the TAP adapter on Windows

### v1.3.1
* Fixed issues on Windows when the TAP adapter name contained non-ASCII characters
* Fixed minor translation issues

### v1.3
* Countries can be marked as favorite regions
* "Auto" region selects a port forwarding region when port forwarding is enabled
* Support Handshake name resolution (using Handshake's testnet)
* Support some Linux distributions using sysvinit
* Persist the sort selection on the regions page
* Improve robustness of TAP adapter configuration on Windows
* Try alternate protocols and ports automatically if the chosen settings cannot connect

### v1.2.1
* Fixed an issue causing the VPN to stay connected when logging out of the OS.

### v1.2
* Tiles can be rearranged with drag-and-drop
* Added a setting for "windowed" or "attached" dashboard on all platforms
* Preserve killswitch and VPN connection if client exits unexpectedly
* Fix reconnecting after suspend on Windows
* Fix multiple crashes, in particular crashes after suspend on Windows
* Improve software rendering backend
* Improved accessibility of Changelog window
* Minor fixes for right-to-left desktops on Linux
* Update to OpenVPN 2.4.7
* Update TAP adapter on Windows to 9.23.3.601
* Added additional firewall diagnostics on Windows

### v1.1.1
* Fix occasional crashes in Windows installer
* Fix macOS installer error on certain systems

### v1.1
* Added tray icon theme setting with alternate styles in response to user feedback
* Improve reliability of VPN IP address
* Attempt to rotate through server IPs more frequently between connection attempts
* Show a warning on Windows when the TAP adapter is not installed
* Improve robustness of firewall rules on Mac OS
* Improve single-instance handling on Linux
* Improve reliability of tray icon on Linux when launched on login
* Clarify warning shown when account can't be verified
* Fix Linux HiDPI support when launched on login for some distributions
* Fix Windows installer on Windows 7 without specific Windows updates
* Fix Allow LAN setting being disabled by default after upgrading from legacy client
* Fix installation issue on Linux due to incorrect umask
* Improve appearance of pop-up tips for languages other than English

### v1.0.2
* Added option to disable accelerated graphics to fix stability issues
* Set correct group id when re-starting after a crash on Linux

### v1.0.1
* Added screen reader support
* Avoid assuming IPv6 is present
* Bring the app to the front if relaunched while running
* Avoid insecure directories on Windows
* Made tray icon more robust on Windows
* Fixed window title on Windows installer
* Fixed rare crash when enabling debug logging

### v1.0
* Added Quick Tour displayed on first run
* Slightly more robust uninstaller on Linux
* Fixed iptables handling when DNS is unavailable on Linux
* Remove legacy .desktop file when upgrading on Linux
