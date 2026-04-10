# INFO

## JWT

- Forkortelse for "JSON Web-Token"
- En JWT inneholder gjerne informasjon om f.eks. bruker, roller, etc.
- JWT er *ikke* kryptert, men den er signert!


### Kryptering vs. Signering

#### Kryptering

- Ta en tekststreng, eks. "Hello, World!"
- For hvert tegn, ta originalen XOR nøkkel = kryptert
- For hvert tegn, ta kryptert XOR nøkkel = originalen
- Dette er et eksempel på "Symmetrisk Kryptering"

#### Signering

- Ta en tekststreng, eks. "Hello, World!"
- Ta hash (eks. sha256) av originalen + salt (+ pepper), legg til på starten eller slutten av originalen
- Resultatet er da en kobinert "string" med `Hello, World!\r\n\r\n${SHA256-hash-digest}`, hvor i dette tilfellet "\r\n\r\n" fungerer som separator.
- Skjer **ALLTID** med asymmetriske nøkler.


