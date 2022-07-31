'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">airplane-router documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AirportsModule.html" data-type="entity-link" >AirportsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AirportsModule-264d458552394e3df9fc391f0ca1721564eecfb1f38b9d6b604587f1fab435d1042bd225e9ee6f4fa0000388a5880bea4178a7482869f743097b307642497eab"' : 'data-target="#xs-controllers-links-module-AirportsModule-264d458552394e3df9fc391f0ca1721564eecfb1f38b9d6b604587f1fab435d1042bd225e9ee6f4fa0000388a5880bea4178a7482869f743097b307642497eab"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AirportsModule-264d458552394e3df9fc391f0ca1721564eecfb1f38b9d6b604587f1fab435d1042bd225e9ee6f4fa0000388a5880bea4178a7482869f743097b307642497eab"' :
                                            'id="xs-controllers-links-module-AirportsModule-264d458552394e3df9fc391f0ca1721564eecfb1f38b9d6b604587f1fab435d1042bd225e9ee6f4fa0000388a5880bea4178a7482869f743097b307642497eab"' }>
                                            <li class="link">
                                                <a href="controllers/AirportsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AirportsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AirportsModule-264d458552394e3df9fc391f0ca1721564eecfb1f38b9d6b604587f1fab435d1042bd225e9ee6f4fa0000388a5880bea4178a7482869f743097b307642497eab"' : 'data-target="#xs-injectables-links-module-AirportsModule-264d458552394e3df9fc391f0ca1721564eecfb1f38b9d6b604587f1fab435d1042bd225e9ee6f4fa0000388a5880bea4178a7482869f743097b307642497eab"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AirportsModule-264d458552394e3df9fc391f0ca1721564eecfb1f38b9d6b604587f1fab435d1042bd225e9ee6f4fa0000388a5880bea4178a7482869f743097b307642497eab"' :
                                        'id="xs-injectables-links-module-AirportsModule-264d458552394e3df9fc391f0ca1721564eecfb1f38b9d6b604587f1fab435d1042bd225e9ee6f4fa0000388a5880bea4178a7482869f743097b307642497eab"' }>
                                        <li class="link">
                                            <a href="injectables/AirportsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AirportsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-3492b6f6af51f884ac932f3bda25c974ea94c8c6dcb0cb2517f905a30eba757f19e9244d2fb333e1c8dd3375c6dff96d921c7c1ba1a711b6a88fad1b854ae971"' : 'data-target="#xs-controllers-links-module-AppModule-3492b6f6af51f884ac932f3bda25c974ea94c8c6dcb0cb2517f905a30eba757f19e9244d2fb333e1c8dd3375c6dff96d921c7c1ba1a711b6a88fad1b854ae971"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-3492b6f6af51f884ac932f3bda25c974ea94c8c6dcb0cb2517f905a30eba757f19e9244d2fb333e1c8dd3375c6dff96d921c7c1ba1a711b6a88fad1b854ae971"' :
                                            'id="xs-controllers-links-module-AppModule-3492b6f6af51f884ac932f3bda25c974ea94c8c6dcb0cb2517f905a30eba757f19e9244d2fb333e1c8dd3375c6dff96d921c7c1ba1a711b6a88fad1b854ae971"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-3492b6f6af51f884ac932f3bda25c974ea94c8c6dcb0cb2517f905a30eba757f19e9244d2fb333e1c8dd3375c6dff96d921c7c1ba1a711b6a88fad1b854ae971"' : 'data-target="#xs-injectables-links-module-AppModule-3492b6f6af51f884ac932f3bda25c974ea94c8c6dcb0cb2517f905a30eba757f19e9244d2fb333e1c8dd3375c6dff96d921c7c1ba1a711b6a88fad1b854ae971"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-3492b6f6af51f884ac932f3bda25c974ea94c8c6dcb0cb2517f905a30eba757f19e9244d2fb333e1c8dd3375c6dff96d921c7c1ba1a711b6a88fad1b854ae971"' :
                                        'id="xs-injectables-links-module-AppModule-3492b6f6af51f884ac932f3bda25c974ea94c8c6dcb0cb2517f905a30eba757f19e9244d2fb333e1c8dd3375c6dff96d921c7c1ba1a711b6a88fad1b854ae971"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommonModule.html" data-type="entity-link" >CommonModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CommonModule-4fc5eecb2fee9523ce6740f0bd6754fabd2fa43174851f45ed077db593c9c8c28ad229f8598879ab6af513d59bf391f75cc6083d18849ffda8be0998fcb55613"' : 'data-target="#xs-injectables-links-module-CommonModule-4fc5eecb2fee9523ce6740f0bd6754fabd2fa43174851f45ed077db593c9c8c28ad229f8598879ab6af513d59bf391f75cc6083d18849ffda8be0998fcb55613"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CommonModule-4fc5eecb2fee9523ce6740f0bd6754fabd2fa43174851f45ed077db593c9c8c28ad229f8598879ab6af513d59bf391f75cc6083d18849ffda8be0998fcb55613"' :
                                        'id="xs-injectables-links-module-CommonModule-4fc5eecb2fee9523ce6740f0bd6754fabd2fa43174851f45ed077db593c9c8c28ad229f8598879ab6af513d59bf391f75cc6083d18849ffda8be0998fcb55613"' }>
                                        <li class="link">
                                            <a href="injectables/GeolibService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeolibService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DatabaseModule-57cea6e8c5763d5fb48e36231ea4842b63217a79b2ffc82beb417278b9ef137a368b41c7255fc6d036fa8b5297df9ebe579c4504d7e7c7e07af11a1fdb6603a2"' : 'data-target="#xs-injectables-links-module-DatabaseModule-57cea6e8c5763d5fb48e36231ea4842b63217a79b2ffc82beb417278b9ef137a368b41c7255fc6d036fa8b5297df9ebe579c4504d7e7c7e07af11a1fdb6603a2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabaseModule-57cea6e8c5763d5fb48e36231ea4842b63217a79b2ffc82beb417278b9ef137a368b41c7255fc6d036fa8b5297df9ebe579c4504d7e7c7e07af11a1fdb6603a2"' :
                                        'id="xs-injectables-links-module-DatabaseModule-57cea6e8c5763d5fb48e36231ea4842b63217a79b2ffc82beb417278b9ef137a368b41c7255fc6d036fa8b5297df9ebe579c4504d7e7c7e07af11a1fdb6603a2"' }>
                                        <li class="link">
                                            <a href="injectables/DataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GraphModule.html" data-type="entity-link" >GraphModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GraphModule-ef1211a5217cd41afeace04f12acbd9e7a2159b8201b41fab098b57db1e28c9ad883172528e4e2abd095d08643e2b5685f3504ab1dcff1b60894bd2be41d95f9"' : 'data-target="#xs-controllers-links-module-GraphModule-ef1211a5217cd41afeace04f12acbd9e7a2159b8201b41fab098b57db1e28c9ad883172528e4e2abd095d08643e2b5685f3504ab1dcff1b60894bd2be41d95f9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GraphModule-ef1211a5217cd41afeace04f12acbd9e7a2159b8201b41fab098b57db1e28c9ad883172528e4e2abd095d08643e2b5685f3504ab1dcff1b60894bd2be41d95f9"' :
                                            'id="xs-controllers-links-module-GraphModule-ef1211a5217cd41afeace04f12acbd9e7a2159b8201b41fab098b57db1e28c9ad883172528e4e2abd095d08643e2b5685f3504ab1dcff1b60894bd2be41d95f9"' }>
                                            <li class="link">
                                                <a href="controllers/GraphController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GraphController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GraphModule-ef1211a5217cd41afeace04f12acbd9e7a2159b8201b41fab098b57db1e28c9ad883172528e4e2abd095d08643e2b5685f3504ab1dcff1b60894bd2be41d95f9"' : 'data-target="#xs-injectables-links-module-GraphModule-ef1211a5217cd41afeace04f12acbd9e7a2159b8201b41fab098b57db1e28c9ad883172528e4e2abd095d08643e2b5685f3504ab1dcff1b60894bd2be41d95f9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GraphModule-ef1211a5217cd41afeace04f12acbd9e7a2159b8201b41fab098b57db1e28c9ad883172528e4e2abd095d08643e2b5685f3504ab1dcff1b60894bd2be41d95f9"' :
                                        'id="xs-injectables-links-module-GraphModule-ef1211a5217cd41afeace04f12acbd9e7a2159b8201b41fab098b57db1e28c9ad883172528e4e2abd095d08643e2b5685f3504ab1dcff1b60894bd2be41d95f9"' }>
                                        <li class="link">
                                            <a href="injectables/GraphService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GraphService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoutesModule.html" data-type="entity-link" >RoutesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-RoutesModule-7d7b255e3081c8c63545e9ad5abf9a213484ebeb5dfc82c450dd50e6b19ed192de129526ff8340b31b4b9e2212a71e1fe908a3b9a0ac086c57bcfc44e2220e44"' : 'data-target="#xs-controllers-links-module-RoutesModule-7d7b255e3081c8c63545e9ad5abf9a213484ebeb5dfc82c450dd50e6b19ed192de129526ff8340b31b4b9e2212a71e1fe908a3b9a0ac086c57bcfc44e2220e44"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RoutesModule-7d7b255e3081c8c63545e9ad5abf9a213484ebeb5dfc82c450dd50e6b19ed192de129526ff8340b31b4b9e2212a71e1fe908a3b9a0ac086c57bcfc44e2220e44"' :
                                            'id="xs-controllers-links-module-RoutesModule-7d7b255e3081c8c63545e9ad5abf9a213484ebeb5dfc82c450dd50e6b19ed192de129526ff8340b31b4b9e2212a71e1fe908a3b9a0ac086c57bcfc44e2220e44"' }>
                                            <li class="link">
                                                <a href="controllers/RoutesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoutesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RoutesModule-7d7b255e3081c8c63545e9ad5abf9a213484ebeb5dfc82c450dd50e6b19ed192de129526ff8340b31b4b9e2212a71e1fe908a3b9a0ac086c57bcfc44e2220e44"' : 'data-target="#xs-injectables-links-module-RoutesModule-7d7b255e3081c8c63545e9ad5abf9a213484ebeb5dfc82c450dd50e6b19ed192de129526ff8340b31b4b9e2212a71e1fe908a3b9a0ac086c57bcfc44e2220e44"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RoutesModule-7d7b255e3081c8c63545e9ad5abf9a213484ebeb5dfc82c450dd50e6b19ed192de129526ff8340b31b4b9e2212a71e1fe908a3b9a0ac086c57bcfc44e2220e44"' :
                                        'id="xs-injectables-links-module-RoutesModule-7d7b255e3081c8c63545e9ad5abf9a213484ebeb5dfc82c450dd50e6b19ed192de129526ff8340b31b4b9e2212a71e1fe908a3b9a0ac086c57bcfc44e2220e44"' }>
                                        <li class="link">
                                            <a href="injectables/RoutesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoutesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AirportsController.html" data-type="entity-link" >AirportsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GraphController.html" data-type="entity-link" >GraphController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RoutesController.html" data-type="entity-link" >RoutesController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AdjacencyList.html" data-type="entity-link" >AdjacencyList</a>
                            </li>
                            <li class="link">
                                <a href="classes/Airport.html" data-type="entity-link" >Airport</a>
                            </li>
                            <li class="link">
                                <a href="classes/AirportRepository.html" data-type="entity-link" >AirportRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/AllExceptionsFilter.html" data-type="entity-link" >AllExceptionsFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Edge.html" data-type="entity-link" >Edge</a>
                            </li>
                            <li class="link">
                                <a href="classes/EdgeTracker.html" data-type="entity-link" >EdgeTracker</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindAirportDto.html" data-type="entity-link" >FindAirportDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindPathDto.html" data-type="entity-link" >FindPathDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindRouteDto.html" data-type="entity-link" >FindRouteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GenericRepository.html" data-type="entity-link" >GenericRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/Graph.html" data-type="entity-link" >Graph</a>
                            </li>
                            <li class="link">
                                <a href="classes/InvalidIataError.html" data-type="entity-link" >InvalidIataError</a>
                            </li>
                            <li class="link">
                                <a href="classes/MinDistanceList.html" data-type="entity-link" >MinDistanceList</a>
                            </li>
                            <li class="link">
                                <a href="classes/MinHeap.html" data-type="entity-link" >MinHeap</a>
                            </li>
                            <li class="link">
                                <a href="classes/Route.html" data-type="entity-link" >Route</a>
                            </li>
                            <li class="link">
                                <a href="classes/RouteRepository.html" data-type="entity-link" >RouteRepository</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IAirport.html" data-type="entity-link" >IAirport</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConfig.html" data-type="entity-link" >IConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataServices.html" data-type="entity-link" >IDataServices</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGenericRepository.html" data-type="entity-link" >IGenericRepository</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRoute.html" data-type="entity-link" >IRoute</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IShortestPathResult.html" data-type="entity-link" >IShortestPathResult</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});