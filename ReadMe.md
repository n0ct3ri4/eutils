# Echo Utils

Le concept est simple. Vous avez des petits systèmes créés par la communauté (ou par nous :p) qui s'apparentent à des utilitaires, et qui s'exécutent à l'aide d'Eutils.

## Mettre en place Eutils.

Tout d'abord, vous pouvez télécharger le CLI à l'aide de cette commande :

```sh
npm i -g @n0ct3ri4/eutils
```

Allez ensuite voir dans vos documents. Oh ! Un nouveau dossier ! Dans ce dernier, vous pourrez stocker vos utilitaires.

## Télécharger des utilitaires.

Les utilitaires officiels seront téléchargeables directement depuis le CLI, avec cette commande :

```sh
echo-install <nom-de-l-utilitaire>
```

> Vous pouvez mettre des virgules après le nom d'un utilitaire pour en télécharger plusieurs en même temps.

Quant aux utilitaires créés par la communauté, il suffira de mettre les fichiers dans le dossier `.eutils/systems` à la racine du disque.

- Windows : `C:\.eutils\systems\`

- Linux : `/.eutils/systems/`

## Lancer des utilitaires

Rien de plus simple, vous avez juste à taper cette commande :

```sh
echo-load <nom-de-l-utilitaire>
```

## _Attention !_

Certains utilitaires peuvent contenir du code malveillant. Pensez à les télécharger auprès de personnes de confiance !

## Licence

Ce projet est sous license `GPL-3.0` ([En savoir plus](https://www.gnu.org/licenses/gpl-3.0.fr.html)).
