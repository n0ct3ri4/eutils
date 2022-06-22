# Echo OS

## Attention !

Soyons clair•e•s, Echo OS n'est pas un système d'exploitation. C'est un gestionnaire d'environnements d'exécution semi-confiné.

Entre autres, vous avez des petits systèmes créés par la communauté (ou par nous :p) qui s'apparente à des utilitaires, et qui s'exécutent à l'aide d'EOS.

## Mettre en place EOS.

Tout d'abord, vous pouvez télécharger le CLI à l'aide de cette commande :

```sh
npm i -g echo-os
```

Allez ensuite voir dans vos documents. Oh ! Un nouveau dossier ! Dans ce dernier, vous pourrez stocker vos utilitaires.

## Télécharger des utilitaires.

Les utilitaires officiels seront téléchargeables directement depuis le CLI, avec cette commande :

```sh
echo-install <nom-de-l-utilitaire>
```

> Vous pouvez mettre des virgules après le nom d'un utilitaire pour en télécharger plusieurs en même temps.

Quant aux utilitaires créés par la communauté, il suffira de mettre les fichiers dans le dossier `.echo-utils` du dossier `Documents`.

- Windows : `C:\Users\<nom>\Documents\.echo-utils\`

- Linux : `/home/<nom>/Documents/.echo-utils/`

## _Attention !_

Certains utilitaires peuvent contenir du code malveillant. Pensez à les télécharger auprès de personnes de confiance !

## Licence

Ce projet est sous license `GPL-3.0` ([En savoir plus](https://www.gnu.org/licenses/gpl-3.0.fr.html)).
