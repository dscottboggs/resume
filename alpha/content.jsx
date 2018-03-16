import React from 'react';
export const FooterLinks = [
  {
    text: "Code",
    link: "https://gitlab.com/users/dscottboggs/projects"
  },{
    text: "Photography",
    link: "https://madscientists.co/category/photography/"
  },{
    text: "Music",
    link: "http://soundcloud.com/dscottboggs"
  },{
    text: "Printable Version",
    link: "printable-version.html"
  },{
    text: "PDF Version",
    link: "printable-version.pdf"
  }
]
export const Header = {
    name: "D. Scott Boggs",
    phoneNumber: "(724) 393-5536",
    email: "scott@tams.tech"
}
export const Sections = [
    {
        title: "Introduction",
        identifier: "intro",
        hasChildPanes: false,
        children: `This document is here to concisely demonstrate the ways in which I can be valuable to potential clientèle, who may be interested in my services for long- and short-term contract opportunities. As you may notice, I have diversified my skill-set, so that I can approach problems from a unique perspective. I will often see an angle to a problem that others don't see because of my wide field of study. However, because of that, I may have skills that are not relevant to your needs, so I've organized by general category to help you to quickly find the skills most relevant to you. There is also an interactive version of this resume which can be found at https://scott.madscientists.co. If you have any questions, or to set up an interview, I can be reached at the above contact information.`
    },{
        title: "Transportation",
        identifier: "Transportation",
        hasChildPanes: false,
        children: (
            <div id="panel1" className="panel">
                My largest range of official experience is in the transportation industry.
                I have around three years of professional experience. I prefer to drive a manual
                transmission vehicle, do my own maintenance, and am comfortable behind the wheel
                of large vehicles as well as small.<br />
                <ul>
                    <li><em>DDC4 Certified</em> - an accredited defensive driving course from the National Safety Council</li>
                    <li><em>Pizza delivery</em> for <i><a
                        target="_blank"
                            href="http://pizzabellagio.com"> Pizza Bellagio </a></i> (2014-2015), <a
                        target="_blank"
                            href="https://pizzahut.com"><i> Pizza Hut </i></a>(2014-2015), <i><a
                        target="_blank"
                            href="http://www.nonnispizzamenu.com"> "Nonni's Pizza" </a></i>(2015), <i><a
                        target="_blank"
                            href="http://www.pizzariviera.com"> Pizza Rivera </a></i> (2016), and <i><a
                        target="_blank"
                            href="http://lucianospizzanorthhills.com"> "Luciano's Pizza" </a></i> (2016)</li>
                    <li><em>Courier/Package delivery</em> for <i><a
                        target="_blank"
                            href="http://americanexpediting.com">American Expediting</a></i> (2016) and <i><a
                        target="_blank"
                            href="https://flex.amazon.com"> Amazon</a></i> (Since 2016) </li>
                    <li><em>Livery/Cab driver</em> for <i><a target="_blank" href="https://www.ztrip.com/Default.aspx">
                        Yellow Cab</a></i>, <i><a target="_blank" href="https://drive.lyft.com">Lyft</a></i> (both
                            2016), and <i><a href="https://drive.lyft.com">Uber</a></i> (2015-2016)</li>
                        <li><em>Driver Helper</em> at <i><a target="_blank" href="https://www.ups.com">United Parcel
                            Service</a></i> (2012)</li>
                        <li><em>Internal Technical Support</em>, Tier I, for <a
                            target="_blank" href="https://www.innosourceportal.com/careers">Innosource, Inc.</a>, under
                            contract with <a target="_blank" href="http://about.van.fedex.com">FedEx</a></li>
                </ul>
            </div>
        )
    }, {
        title: "Technology",
        identifier: "Technology",
        hasChildPanes: true,
        children: [
            {
                title: "Hardware",
                identifier: "Hardware",
                hasChildPanes: false,
                children: (
                    <div className="subpanel"><ul>
                        <li>I began my study of the inner workings of electronics on my own when I was
                            younger, but at 14 a local TV repairman agreed to teach me, and I spent a
                            year and a half learning how electricity and circuits work and learning to
                            troubleshoot hardware under his guidance.</li>
                        <li>I also have worked for a few computer repair shops over the years. Most
                          are now defunct and as such providing contact information would be difficult</li>
                        <li>I have built several custom computers.</li>
                        <li>I'm experimenting with Raspberry Pi and Arduino.</li>
                        <li>I built a Prusa i3</li>
                        <li><a href="https://gitlab.com/dashboard/projects?&name=cad" target="_blank">
                            3D modelling</a> with <a href="https://madscientists.co/category/tech/3d/"
                            target="_blank">OpenSCAD</a></li>
                        <li>I brushed up on my circuit design recently; I still need more practice.</li>
                    </ul></div>
                )
            },{
                title: "Software",
                identifier: "Software",
                hasChildPanes: false,
                children: (
                    <div className="subpanel">
                        <ul>
                            <li><a href="https://madscientists.co/category/tech/serving/" target="_blank">
                              LAMP/LEMP setup</a> for web site, cloud server, etc. I prefer nginx over apache,
                              and I am familiar with the concepts of designing and integrating RESTful APIs</li>
                            <li>Virtualization and scalable computing:<ul>
                                <li>Some Citrix from my time at </li>
                                <li>KVM/QEMU with virt-manager and a bit of the CLI stuff</li>
                                <li>VirtualBox</li>
                                <li>Docker, primarily using docker-compose.</li>
                                <li>Industry standard security measures with automated HTTPS
                                    certificate renewal through <a target="_blank" href="">Let's
                                    Encrypt</a> and <a target="_blank"
                                    href="https://store.docker.com/community/images/jrcs/letsencrypt-nginx-proxy-companion"
                                    >docker</a>. See <a target="_blank"
                                    href="https://www.ssllabs.com/ssltest/analyze.html?d=scott.madscientists.co"
                                    >SSLLabs</a> for detailed information on why all my sites have
                                    an A+ rating.</li>
                            </ul></li>
                            <li>Linux BASH (although I prefer to have my .zshrc file) and command interface
                                (I run linux and live in the terminal for most of my computing)</li>
                            <li>I consider myself much more proficient in Linux/Unix-like systems than
                                in Windows. I don't currently have Windows on any of my computers and rely
                                solely on free (libre) software for my workflow.</li>
                            <li>MS Office (including some Excel; although it has been some time - I use
                                libreoffice or more recently collabora online for my personal documents)</li>
                        </ul>
                    </div>
                )
            },{
                title: "Code",
                identifier: "Code",
                hasChildPanes: false,
                children: (
                    <div className="subpanel">
                        <ul>
                            <li>Java - studied at college and HS, up through data structures (see my
                                <a target="_blank" href="https://github.com/dscottboggs/TemperatureConverter">
                                github</a>)</li>
                            <li>Web development:<ul>
                                <li>LAMP/<a target="_blank" href="https://madscientists.co/category/serving/">
                                    server architecture</a></li>
                                <li>HTML(5), CSS, Jquery (see this web site - handwritten - all visible with "View Source" [F12] )</li>
                                <li><a target="_blank" href="https://madscientists.co/category/serving/containers/">
                                    Docker, primarily using docker-compose.</a> Multi-application composition,
                                    automation, development-testing-production life cycles, etc.</li>
                                <li>RESTful API development, using Python's "flask" library on the server,
                                    wget for test requests, and Python's "requests" for scripted client-side
                                    interactions.</li>
                                <li>Industry standard security measures with automated HTTPS
                                    certificate renewal through <a target="_blank" href="">Let's
                                    Encrypt</a> and <a target="_blank"
                                    href="https://store.docker.com/community/images/jrcs/letsencrypt-nginx-proxy-companion"
                                    >docker</a>. See <a target="_blank"
                                    href="https://www.ssllabs.com/ssltest/analyze.html?d=scott.madscientists.co"
                                    >SSLLabs</a> for detailed information on why all my sites have
                                    an A+ rating.</li>
                            </ul></li>
                            <li>Python (see my <a target="_blank"
                                href="https://github.com/dscottboggs?utf8=%E2%9C%93&tab=repositories&q=&type=&language=python">
                                github</a> and <a target="_blank"
                                href="https://madscientists.co/category/programming/python/">blog</a>).
                                Definitely my preferred language, when feasible.</li>
                            <li>I've danced around C++ and other C-based languages for years;
                                they're pretty hard to avoid. I have some familiarity, but not
                                as much as I'd like to. See my <a target="_blank"
                                href="https://github.com/dscottboggs?utf8=%E2%9C%93&tab=repositories&q=&type=&language=c%2B%2B">github</a>
                              for anything relevant as it's posted.</li>
                            <li>BASIC - the first language I learned, at age 12. I've always had a thing for old tech</li>
                            <li>BASH shell scripting (see my <a target="_blank"
                                href="https://github.com/dscottboggs?utf8=%E2%9C%93&tab=repositories&q=&type=&language=shell">
                                github</a>) and some Windows shell/DOS</li>
                            <li>Some machine learning and data analysis</li>
                        </ul>
                    </div>
                )
            },{
                title: "Networking and more...",
                identifier: "Networking",
                hasChildPanes: false,
                children: (
                    <div className="subpanel">
                        <ul>
                            <li>Network configuration and security, routing.</li>
                            <li>LAMP setup for web site, cloud server, etc.</li>
                            <li>More to come (pfSense, VPN, security and IOT)</li>
                            <li>Data interchange mediums like JSON, YAML, and XML</li>
                            <li>Relational database management in SQLite (on Android primarily),
                                MariaDB/MySQL, and PostGRES</li>
                            <li>Industry standard security measures with automated HTTPS
                                certificate renewal through <a target="_blank" href="">Let's
                                Encrypt</a> and <a target="_blank"
                                href="https://store.docker.com/community/images/jrcs/letsencrypt-nginx-proxy-companion"
                                >docker</a>. See <a target="_blank"
                                href="https://www.ssllabs.com/ssltest/analyze.html?d=scott.madscientists.co"
                                >SSLLabs</a> for detailed information on why all my sites have
                                an A+ rating.</li>
                        </ul>
                    </div>
                )
            }
        ]
    },{
        title: "Photography and Video",
        identifier: "Photography",
        hasChildPanes: false,
        children: (
            <div id="panel4" className="panel"      >
                I have been working with digital photography and videography quite
                steadily for the past year or so, and it's been a passing interest
                most of my life. There were a lot of broken cameras when I was younger
                so there was a lot of time that I held an interest and studied it,
                but didn't have the equipment to experiment with it, until more recently.
                I also have studied framing and composition throughout my life
                including times when I did not have a camera.

                {/* TODO add photography */}
            </div>
        )
    },{
        title: "Education",
        identifier: "Education",
        hasChildPanes: false,
        children: (
            <ul>
                <li>Graduated from Burrell High School in Lower Burrell, PA; class of 2011.</li>
                <li>Attended some college at Westmoreland County Community Colllege and the
                    Community College of Allegheny County, but I decided that it would be wiser to
                    devote my time to less structured educational endeavors.</li>
            </ul>
        )
    },{
        title: "Relevant Equipment",
        identifier: "Equipment",
        children: (
            <ul>
                <li>Transportion
                    <ul><li>2009 Honda Civic</li></ul>
                </li>
                <li>Technology
                    <ul>
                        <li>Old Gateway tower running Debian Stretch with i3 window manager.</li>
                        <li>Old HP laptop running Ubuntu 17.10</li>
                        <li>Three rented public cloud servers running Docker under Debian
                            Stretch. Two for development, one production.</li>
                        <li>A Google Nexus 6 running the latest LineageOS (Anroid 7.1)</li>
                        <li>An old tower running Debian Stretch with Docker for NextCloud.</li>
                        <li>Raspberry Pi Model B</li>
                        <li>Arduino Uno</li>
                        <li>A few vintage pieces and a <i>lot</i> of spare parts</li>
                    </ul>
                </li>
                <li>Photography
                    <ul>
                        <li>Nikon D3300 with 18-55mm lens</li>
                        <li>Tripod</li>
                        <li>Lighting apparatuses</li>
                    </ul>
                </li>
            </ul>
        )
    }
]
