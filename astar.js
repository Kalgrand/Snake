/**
 * Obiekt AStar do wyszukiwania najkrotszej sciezki
 *
 * @constructor
 * @param {number} mapWidth - szerokosc mapy gry
 * @param {number} mapHeight - wysokosc mapy gry
 * @param {Object[]} stones - tablica ze wspolrzednymi kamieni (x,y)
 * @param {Object[]} snake - tablica ze wspolrzednymi weza (x,y)
 */

function AStar(mapWidth, mapHeight, stones, snake) {
    // koszt przejscia z pustego pola na pole zawierajace kamien - duza liczba sprawiajaca, ze nie oplaca sie przechodzic przez kamien, lepiej go okrazyc
    var STONE_DISTANCE = 999999;
    // to samo co wyzej - zapobiega zawracaniu sie glowy weza i chodzeniu po wlasnym ogonie
    var SNAKE_DISTANCE = STONE_DISTANCE;
    this.mapWidth = mapWidth;
    this.mapHeight = mapHeight;
    this.map = [];

    //inicjalizacja mapy
    for(var i = 0; i < this.mapWidth; i++) {
        this.map[i] = [];
        for (var j = 0; j < this.mapHeight; j++) {
            this.map[i].push({
                x: i,
                y: j,
                distance: this.containsNode(stones, {x: i, y: j}) ? STONE_DISTANCE : (this.containsNode(snake, {x: i, y: j}) ? SNAKE_DISTANCE : 1),
                // droga pomiędzy polem początkowym a danym polem. Dokładniej: suma wag krawędzi, które należą już do ścieżki plus waga krawędzi łączącej aktualne pole
                g: 0,
                // przewidywana przez heurystykę droga od danego pola do pola docelowego
                h: 0,
                // f = f + h
                f: 0
            });
        }
    }
};