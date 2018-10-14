TournamentPair - no players assigned - no score:
```js
<TournamentPair playerOne={''} playerTwo={''}/>
```
TournamentPair - one player assigned - no score:
```js
<TournamentPair playerOne={'Ben'} playerTwo={''}/>
```
TournamentPair - two players assigned - before game - no score:
```js
<TournamentPair playerOne={'Ben'} playerTwo={'John'}/>
```
TournamentPair - two players assigned - after game - player no1 won:
```js
<TournamentPair playerOne={'Ben'} playerTwo={'John'} scoreOne={2} scoreTwo={1}/>
```
TournamentPair - two players assigned - after game - player no2 won:
```js
<TournamentPair playerOne={'Ben'} playerTwo={'John'} scoreOne={1} scoreTwo={2}/>
```

