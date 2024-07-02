import ICategory from '../types/category';

interface ICategories extends Array<ICategory> {}

const CATEGORIES: ICategories = [
  {
    title: 'Современная живопись',
    link: '#',
    imageurl:
      'https://s3-alpha-sig.figma.com/img/7c3d/f9da/60e9d68b0423f02019ff0847cad54b9e?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DL1IA1L5872szTm8ukR9A2Op7lZaq6-NaTip1pWasR2UUP5WQ6eaGDk6RVuIGFlZAQtzO-PME1AV-7MyIuL7jl1TlDeWZ7M2o~hOkihwuVBbtODAqGEGSRUTUlRqgBwDgrWRIOWw3pbBohgm14AEDmy2juvAQrSlTECNHHhYFhbEiGlLVyQ94peXgPH17p8i~fsc1J0j55RGZwJ815AToYxAjJRvvLAXsyHcUb0elyZ07GcBQrmYW5yAA-ubv4wB2B2sPWc8RGqWw6TPyixcecCQY-MyiK~4ZN7lnHWi9qSAjsoisHoskGUNEx2cOqkkITHhKhIlfvWDZX5PUyj19g__',
  },
  {
    title: 'Молодые художники',
    link: '#',
    imageurl:
      'https://s3-alpha-sig.figma.com/img/fc21/d69d/9b276c38b84269e3bf6e847ede7937cd?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Em65aizgE991C6MTjtdGpo6EjntuycSPB9p8vf8cUhzhQ3Ud1e8aGRX-9wWesdKtHkJryp1afAkFWx~tfIyOgr4aJ7dAJLz0twGTm-Lsa2FGaqYb6BgkciJiegFecOas~2dnDmNHQHnPBiv5aNhy37xKCsCoesv0s3zVa3I-VhE0bLUPL6cr6v2iCHV4kaqnQJ5DNhfldQU4tmY7IZdGWgPe5j97FYIbAtoioMmxRhFK0V5MVgSjOirTWAn~kFBjvMDZXyJJr3e9d~QFQOmmq1LToFXTrQBSfldHU4s1RdqO8R6FzfRbcekQJkfx0JO94~KsF8QAeW-uWtt~1fpVjw__',
  },
  {
    title: 'Концептуальное искусство',
    link: '#',
    imageurl:
      'https://s3-alpha-sig.figma.com/img/41b4/a9dc/6e54facb579a5de5284391a7e550d04b?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U2tnMVzU0Y4vSbOlmlNhOWIKKo8VlW2wWlfmvo73kq3QarAf~~T5Br~3OBwoyi1JMze9o8Y-7TCj-B~bu4u1QNuYi3-KszC~AFTtlVFGgYJpBFwN6T3ToO0Cskiwil5ro2hDHcVAOzdAHj7y~k9uWJvVUSBfHxk6SNEsF0TzyYB7XDMu62ueLDwxi2AQrmKoWgrgDy4U8KpCFoM4eAtMBxfZWWyZa3fFAv58RqE1OlN~gO6IBuLHgh4oZFMnCu9da-5pMsZnmAkoprh1cZNzhyaEWIprP4ZARMV8jVYwZn~GhCdlHVf81KHmFr3uZmgqEqJuY2ZRYZXO9DHzulC01Q__',
  },
  {
    title: 'Принты и тиражная графика',
    link: '#',
    imageurl:
      'https://s3-alpha-sig.figma.com/img/29ea/5ae4/819afd047cc17072c2b6c59e9aadeca1?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=meglZWCsDpqApk80HxLXTqlI~RX9Ke-pvgUnAwN5DFCmzhibiYXjLoi8gEESRWqKZX19rVddlS2yLmqWEwmfgkEqLi6VYuZ48lCBYqwxkpDkg-KZHWMHIMT5Lnst6sgq~teRpDJ6E1iuKCJ-iicVYPuyk3L2KnvLhi8QUjKBhd6Hy7~DC8kJq7eCIHoqyaBl221bG3OSrUKbIVaO2VZWTjc4XAdDh-5tJYahT77K0clF6EEVbaueG43lPTlfBrsJgK8YC188NmbfIRC5BI7YcSuVhRxORzIOV4XY6SJLm3FNAxFJs~AkOAx8lxYEh6zj92d6UJULBrzth6pVeDBseA__',
  },
  {
    title: 'Работы для интерьера',
    link: '#',
    imageurl:
      'https://s3-alpha-sig.figma.com/img/010a/9aa9/eb38c2f3747d3bb4aafbf9c2f783f61e?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L0nRGplu1~UbV7AI29~OyZb7Or8BnmM0AfI~7miuGVhC~WbGqlfki6i4aPJqlL0snvWI6ymszbNagxEuns~Scktg411bASshwUAGwmi66fhUe5NOxF-Dky10wKnV14HgbufMhDTb8eLLKeXjNnoXQF0wsY8ZrjgwPpvwcmPm2I2aoKor54wAWr8AwobKGKB4S7sfi5OYVptA-Qx0zm0~8pa-EwXwO~BIuUwldviwKpmsEbCle~ieZPfF6KQkB43ADegcgpWst3u1nIjrc50cPFi~F~gQoI2MwCZJwCzcMrUXgwfHxVD1mw1gQymxPU0R0sYVoKHEEg0pAJYybM9Z6A__',
  },
  {
    title: 'Digital искусство',
    link: '#',
    imageurl:
      'https://s3-alpha-sig.figma.com/img/8546/1349/bc75ebbe51a6cba40072c236396225c1?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pKlIFH-COqBa2GMSt0aoKI5~lZZJklOm1uHh49jv~9yRr3hERimrL6KId33RWEZkOd15ItUBd9RhTLlY2C62xk3bV6R2Grq5rptkZnSU6Y-r7BY-nKPw~H~0W1tvrZZ-b0XCoqRObnf-TPSsKfLEU06dRBhagUOqcF9zibfzvGkYAfWPZh3LlSfiCiEXcIURMh9IAvWTe-QhQ6PO86oceyBlZCvAR2bTJuuUTJl38xpIoAXzSrZWytdA1UYuWuXvHJISrbSL1RZhrmKHt4GSl5TPJCplFT1Np1VWyg2Kv~Npb0TAy-tk3oLzQ0QN-fWWEhnB4YmhLwFAgVR~tcdUEg__',
  },
];

export default CATEGORIES;
