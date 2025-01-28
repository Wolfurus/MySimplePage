const buildName = new URLSearchParams(window.location.search).get('name');
buildView(buildName);

function buildView(buildId) {
    build = [];
    swapItems = [];
    descriptions = [];
    gName = "";
    descriptions = {};

    switch (buildId) {
        case "mt":
            build = [
                _soldierHelmet,
                _soldierHelmet.spells = [_blockHead, _authorityHead],
                _guardianArmor,
                _guardianArmor.spells = [_tauntArmor, _authorityArmor, _protectiveInstinctArmor],
                _hunterShoes,
                _hunterShoes.spells = [_rushShoes, _quickThinker],
                _hammer,
                _hammer.spells = [_threateningStrikeMain, _inertiaRingMain, _earthShatterMain, _dreadladenFightingMain],
                _leeringCane,
                _fortSterlingCape,
                _minorPoisonPotion,
                _avalonianBeefSandwich
            ];
            swapItems = [
                _incubus,
                _sarcophagus,
                _caerleonCape,
                _guardianHelmet,
                _blackMonkStave,
                _mercenaryHood
            ];

            name = "Main Tank";
            gName = "Haupt Tank";

            rol = "Tank"
            descriptions = {
                bosses: {
                    avalonianArchmage: [_incubus, _sarcophagus, _blackMonkStave, _mercenaryHood],
                    avalonianConstruct: [_incubus, _sarcophagus, _blackMonkStave, _mercenaryHood],
                    avalonianCrystalBasilisk: [_incubus, _sarcophagus],
                    avalonianKnightCaptain: [_incubus, _sarcophagus],
                    avalonianHighPriestess: [],
                    sirBedivere: [_incubus, _sarcophagus, _guardianHelmet]
                },
            }
            break;
        case "ot":
            build = [
                _soldierHelmet,
                _soldierHelmet.spells = [_blockHead, _toughness],
                _guardianArmor,
                _guardianArmor.spells = [_tauntArmor, _toughnessArmor, _protectiveInstinctArmor],
                _royalShoes,
                _royalShoes.spells = [_evasiveJump, _quickThinker],
                _incubus,
                _incubus.spells = [_threateningSmash, _airCompressorMain, _shrinkingCurseHead, _energeticMain],
                _sarcophagus,
                _caerleonCape,
                _minorPoisonPotion,
                _porkOmelette,
            ];
            swapItems = [
                _guardianHelmet,
                _mistcaller,
                _assassinHood,
                _knightHelmet
            ];

            name = "Off Tank";
            gName = "Zweiter Tank";

            rol = "Tank";

            descriptions = {
                bosses: {
                    avalonianArchmage: [_incubus, _mistcaller, _assassinHood, _guardianArmor],
                    avalonianConstruct: [_incubus, _mistcaller, _assassinHood, _guardianArmor],
                    avalonianCrystalBasilisk: [_incubus, _mistcaller, _assassinHood, _guardianArmor],
                    avalonianKnightCaptain: [_incubus, _mistcaller, _assassinHood, _guardianArmor],
                    avalonianHighPriestess: [_incubus, _mistcaller, _assassinHood, _guardianArmor],
                    sirBedivere: [_incubus, _mistcaller, _guardianArmor, _guardianHelmet]
                }
            }
            break;
        case "ga":
            build = [
                _assassinHood,
                _assassinHood.spells = [_meditationHead, _quickThinker],
                _royalJacket,
                _royalJacket.spells = [_royalBannerArmor, _quickThinkerArmor],
                _hunterShoes,
                _hunterShoes.spells = [_refreshingSprint, _quickThinker],
                _greatArcane,
                _greatArcane.spells = [_arcaneProtectionMain, _mimicMain, _timeFreezeMain, _energeticArcaneStaff],
                _fortSterlingCape,
                _minorPoisonPotion,
                _porkOmelette,
            ];
            swapItems = [
                _guardianHelmet,
                _judicatorArmor,
                _enigmaticStaff,
                _occultStaff,
                _malevolentLocus,
                _knightHelmet,
                _frostStaff
            ];

            name = "Grat Arcane";
            gName = "Großer Arkan";

            rol = "Core";

            descriptions = {
                bosses: {
                    avalonianArchmage: [_enigmaticStaff, _judicatorArmor, _knightHelmet],
                    avalonianConstruct: [_frostStaff, _assassinHood, _royalJacket],
                    avalonianCrystalBasilisk: [_malevolentLocus, _knightHelmet],
                    avalonianKnightCaptain: [_occultStaff, _royalJacket],
                    avalonianHighPriestess: [_assassinHood, _judicatorArmor, _enigmaticStaff],
                    sirBedivere: [_enigmaticStaff, _guardianArmor, _guardianHelmet]
                }
            }
            break;
        case "1h":
            build = [
                _assassinHood,
                _assassinHood.spells = [_meditationHead, _quickThinker],
                _guardianArmor,
                _guardianArmor.spells = [_enfeebleAuraArmor, _authorityArmor, _spiritCrushArmor],
                _hunterShoes,
                _hunterShoes.spells = [_rushShoes, _quickThinker],
                _arcaneStaff,
                _arcaneStaff.spells = [_arcaneProtectionMain, _mimicMain, _arcaneOrbMain, _energeticArcaneStaff],
                _leeringCane,
                _bridgewatchCape,
                _minorPoisonPotion,
                _avalonianBeefSandwich
            ];
            swapItems = [
                _guardianArmor,
                _judicatorArmor,
                _enigmaticStaff,
                _occultStaff,
                _blackMonkStave,
                _knightHelmet
            ];

            name = "One Hand Arcane";
            gName = "Einhand Arkan";

            rol = "Core";

            descriptions = {
                bosses: {
                    avalonianArchmage: [_blackMonkStave, _guardianArmor, _assassinHood],
                    avalonianConstruct: [_blackMonkStave, _guardianArmor, _assassinHood],
                    avalonianCrystalBasilisk: [_blackMonkStave, _guardianArmor, _assassinHood],
                    avalonianKnightCaptain: [_enigmaticStaff, _judicatorArmor],
                    avalonianHighPriestess: [_arcaneStaff, _assassinHood],
                    sirBedivere: [_blackMonkStave, _guardianArmor, _guardianHelmet]

                }
            }
            break;
        case "mh":
            build = [
                _graveguardHelmet,
                _graveguardHelmet.spells = [_sacrificeHead, _toughness],
                _royalRobe,
                _royalRobe.spells = [_magicRuneArmor, _aggression],
                _royalShoes,
                _royalShoes.spells = [_evasiveJump, _balancedMind],
                _holyStaff,
                _holyStaff.spells = [_generousHeal, _reawaken, _desperatePrayer, _adrenalineDrivenCharity],
                _celestialCenser,
                _lymhurstCape,
                _minorEnergyPotion,
                _porkOmelette
            ];
            swapItems = [
                _guardianHelmet,
            ];

            name = "Main Heal";
            gName = "Hauptheiler";

            rol = "Core";

            descriptions = {
                bosses: {
                    avalonianArchmage: [],
                    avalonianConstruct: [],
                    avalonianCrystalBasilisk: [],
                    avalonianKnightCaptain: [],
                    avalonianHighPriestess: [],
                    sirBedivere: [_guardianHelmet]
                },
            };
            break;
        case "ironrootHeal":
            build = [
                _assassinHood,
                _assassinHood.spells = [_meditationHead, _quickThinker],
                _royalJacket,
                _royalJacket.spells = [_royalBannerArmor, _quickThinkerArmor],
                _shoesOfTenacity,
                _shoesOfTenacity.spells = [_refreshingSprint, _quickThinker],
                _ironrootStaff,
                _ironrootStaff.spells = [_thornGrowth, _revitalize, _soulLink],
                _mistcaller,
                _thetfordCape,
                _minorEnergyPotion,
                _porkOmelette
            ];
            swapItems = [
                _fallenStaff,
                _druidCowl,
                _lymhurstCape,
                _guardianHelmet,
            ];

            name = "Ironroot Heal";
            gName = "Eisenwurzel Heiler";

            rol = "Support";

            descriptions = {
                bosses: {
                    avalonianArchmage: [_fallenStaff, _druidCowl],
                    avalonianConstruct: [_fallenStaff, _mercenaryHood, _druidCowl],
                    avalonianCrystalBasilisk: [_fallenStaff, _druidCowl],
                    avalonianKnightCaptain: [_fallenStaff, _druidCowl],
                    avalonianHighPriestess: [],
                    sirBedivere: [_fallenStaff, _druidCowl]
                },
            };
            break;
        case "ironrootBms":
            build = [
                _assassinHood,
                _assassinHood.spells = [_meditationHead, _quickThinker],
                _royalJacket,
                _royalJacket.spells = [_royalBannerArmor, _quickThinkerArmor],
                _shoesOfTenacity,
                _shoesOfTenacity.spells = [_refreshingSprint, _quickThinker],
                _ironrootStaff,
                _ironrootStaff.spells = [_thornGrowth, _revitalize, _soulLink],
                _mistcaller,
                _thetfordCape,
                _minorEnergyPotion,
                _porkOmelette
            ];
            swapItems = [
                _blackMonkStave,
                _guardianArmor,
                _knightHelmet,
            ];

            name = "Ironroot Def";
            gName = "Eisenwurzel Verteidigung";

            rol = "Core";

            descriptions = {
                bosses: {
                    avalonianArchmage: [_blackMonkStave, _guardianArmor, _assassinHood],
                    avalonianConstruct: [_blackMonkStave, _guardianArmor, _assassinHood],
                    avalonianCrystalBasilisk: [_blackMonkStave, _guardianArmor, _assassinHood],
                    avalonianKnightCaptain: [_blackMonkStave, _guardianArmor, _assassinHood],
                    avalonianHighPriestess: [_blackMonkStave, _guardianArmor],
                    sirBedivere: [_blackMonkStave, _guardianArmor, _assassinHood]
                },
            };
            break;
        case "frostSupport":
            build = [
                _assassinHood,
                _assassinHood.spells = [_meditationHead, _quickThinker],
                _royalJacket,
                _royalJacket.spells = [_royalBannerArmor, _quickThinkerArmor],
                _shoesOfTenacity,
                _shoesOfTenacity.spells = [_refreshingSprint, _quickThinker],
                _frostStaff,
                _frostStaff.spells = [_iceShard, _glacialObelisk, _freezingWind, _energeticFrostStaff],
                _mistcaller,
                _lymhurstCape,
                _minorPoisonPotion,
                _porkOmelette
            ];
            swapItems = [
                _fallenStaff,
                _druidCowl,
                _guardianArmor,
                _knightHelmet,
                _guardianHelmet
            ];

            name = "Frost Support";
            gName = "Frost Unterstützung";

            rol = "Support";

            descriptions = {
                bosses: {
                    avalonianArchmage: [_fallenStaff, _knightHelmet],
                    avalonianConstruct: [_frostStaff],
                    avalonianCrystalBasilisk: [_knightHelmet],
                    avalonianKnightCaptain: [_fallenStaff, _knightHelmet],
                    avalonianHighPriestess: [_fallenStaff],
                    sirBedivere: [_fallenStaff, _guardianHelmet]
                },
            };
            break;
        case "realmbreaker":
            build = [
                _stalkerHood,
                _stalkerHood.spells = [_mortalAgony, _quickThinker],
                _royalArmor,
                _royalArmor.spells = [_energySource, _toughnessArmor, _spiritCrushArmor],
                _cultistSandals,
                _cultistSandals.spells = [_rottenGround, _aggression],
                _realmbreaker,
                _realmbreaker.spells = [_rendingRage, _deadlyChop, _aftershock, _aggressiveRush],
                _demonCape,
                _minorPoisonPotion,
                _porkOmelette,
            ];
            swapItems = [
                _wisperingBow,
                _druidCowl,
                _hoodOfTenacity,
                _knightHelmet,
            ];

            name = "Realmbreaker";
            gName = "Spährenbrecher";

            rol = "Support";

            descriptions = {
                bosses: {
                    avalonianArchmage: [_wisperingBow, _knightHelmet],
                    avalonianConstruct: [_wisperingBow],
                    avalonianCrystalBasilisk: [_wisperingBow, _knightHelmet],
                    avalonianKnightCaptain: [_wisperingBow, _knightHelmet],
                    avalonianHighPriestess: [],
                    sirBedivere: [_hoodOfTenacity]
                },
            };
            break;
        case "shadowcallerSupport":
            build = [
                _assassinHood,
                _assassinHood.spells = [_meditationHead, _quickThinker],
                _royalJacket,
                _royalJacket.spells = [_royalBannerArmor, _quickThinkerArmor],
                _hunterShoes,
                _hunterShoes.spells = [_refreshingSprint, _quickThinker],
                _shadowcaller,
                _shadowcaller.spells = [_cursedSickle, _armorPiercer, _innerShadow, _energeticCursedStaff],
                _mistcaller,
                _lymhurstCape,
                _minorPoisonPotion,
                _porkOmelette
            ];
            swapItems = [
                _wisperingBow,
                _druidCowl,
                _guardianHelmet,
                _knightHelmet,
            ];

            name = "Shadowcaller Support";
            gName = "Schattenrufer Unterstützung";

            rol = "Support";

            descriptions = {
                bosses: {
                    avalonianArchmage: [_wisperingBow, _knightHelmet],
                    avalonianConstruct: [_wisperingBow],
                    avalonianCrystalBasilisk: [_wisperingBow, _knightHelmet],
                    avalonianKnightCaptain: [_wisperingBow, _knightHelmet],
                    avalonianHighPriestess: [],
                    sirBedivere: [_wisperingBow, _guardianHelmet]
                },
            };
            break;
        case "carving":
            build = [
                _assassinHood,
                _assassinHood.spells = [_meditationHead, _quickThinker],
                _royalJacket,
                _royalJacket.spells = [_royalBannerArmor, _quickThinkerArmor],
                _shoesOfTenacity,
                _shoesOfTenacity.spells = [_refreshingSprint, _quickThinker],
                _carvingSword,
                _carvingSword.spells = [_heroicCleave, _ironWill, _fearlessStrike, _heroicFighting],
                _lymhurstCape,
                _minorPoisonPotion,
                _porkOmelette,
            ];
            swapItems = [
                _wisperingBow,
                _druidCowl,
                _guardianHelmet,
                _knightHelmet,
            ];

            name = "Carving";
            gName = "Schlitzschwert";

            rol = "Support";

            descriptions = {
                bosses: {
                    avalonianArchmage: [_wisperingBow, _knightHelmet],
                    avalonianConstruct: [_wisperingBow],
                    avalonianCrystalBasilisk: [_wisperingBow, _knightHelmet],
                    avalonianKnightCaptain: [_wisperingBow, _knightHelmet],
                    avalonianHighPriestess: [],
                    sirBedivere: [_wisperingBow, _guardianHelmet]
                },
            };
            break;
        case "xBow":
            build = [
                _royalCowl,
                _royalCowl.spells = [_perpetualEnergy, _aggression],
                _druidRobe,
                _druidRobe.spells = [_obsessiveBurst, _aggression],
                _hunterShoes,
                _hunterShoes.spells = [_refreshingSprint, _quickThinker],
                _weepingRepeater,
                _weepingRepeater.spells = [_explosiveBolt, _caltrops, _explosiveMine, _wellPrepared],
                _caerleonCape,
                _minorEnergyPotion,
                _porkOmelette
            ];

            name = "X-Bow";
            gName = "Armbrust";

            rol = "DD";

            descriptions = {
                bosses: {
                    avalonianArchmage: [],
                    avalonianConstruct: [],
                    avalonianCrystalBasilisk: [],
                    avalonianKnightCaptain: [],
                    avalonianHighPriestess: [],
                    sirBedivere: []
                },
            };
            break;
        case "frostDD":
            build = [
                _royalCowl,
                _royalCowl.spells = [_perpetualEnergy, _concentration],
                _druidRobe,
                _druidRobe.spells = [_obsessiveBurst, _concentrationArmor],
                _royalSandals,
                _royalSandals.spells = [_defenselessRush, _concentration],
                _chillhowl,
                _chillhowl.spells = [_iceShard, _frostBomb, _glacialPrison, _aggressiveCaster],
                _cryptcandle,
                _morganaCape,
                _minorEnergyPotion,
                _porkOmelette
            ];
            swapItems = [
                _wildfireStaff
            ];

            name = "Frost";
            gName = "Frost";

            rol = "DD";

            descriptions = {
                bosses: {
                    avalonianArchmage: [_wildfireStaff],
                    avalonianConstruct: [_wildfireStaff],
                    avalonianCrystalBasilisk: [_wildfireStaff],
                    avalonianKnightCaptain: [_wildfireStaff],
                    avalonianHighPriestess: [],
                    sirBedivere: [_wildfireStaff]
                },
            };
            break;
        case "shadowcallerDD":
            build = [
                _assassinHood,
                _assassinHood.spells = [_meditationHead, _balancedMind],
                _druidRobe,
                _druidRobe.spells = [_obsessiveBurst, _aggression],
                _hunterShoes,
                _hunterShoes.spells = [_refreshingSprint, _quickThinker],
                _shadowcaller,
                _shadowcaller.spells = [_cursedTar, _cursedBeam, _innerShadow, _furios],
                _cryptcandle,
                _caerleonCape,
                _minorEnergyPotion,
                _deadwaterEelStew
            ];

            name = "Shadowcaller";
            gName = "Schattenrufer";

            rol = "DD";

            descriptions = {
                bosses: {
                    avalonianArchmage: [],
                    avalonianConstruct: [],
                    avalonianCrystalBasilisk: [],
                    avalonianKnightCaptain: [],
                    avalonianHighPriestess: [],
                    sirBedivere: []
                },
            };
            break;
        case "spirithunter":
            build = [
                _assassinHood,
                _assassinHood.spells = [_meditationHead, _quickThinker],
                _druidRobe,
                _druidRobe.spells = [_obsessiveBurst, _aggression],
                _royalSandals,
                _royalSandals.spells = [_defenselessRush, _aggression],
                _spirithunter,
                _spirithunter.spells = [_lungingStrike, _forestOfSpears, _corruptingSteel, _aggressiveRush],
                _caerleonCape,
                _minorEnergyPotion,
                _deadwaterEelStew
            ];
            swapItems = [
                _lymhurstCape
            ];

            name = "Spirithunter";
            gName = "Geisterjäger";

            rol = "DD";

            descriptions = {
                bosses: {
                    avalonianArchmage: [_lymhurstCape],
                    avalonianConstruct: [_lymhurstCape],
                    avalonianCrystalBasilisk: [_lymhurstCape],
                    avalonianKnightCaptain: [_lymhurstCape],
                    avalonianHighPriestess: [_lymhurstCape],
                    sirBedivere: [_lymhurstCape]
                },
            };
            break;
        case "lightcaller":
            build = [
                _royalCowl,
                _royalCowl.spells = [_perpetualEnergy, _aggression],
                _druidRobe,
                _druidRobe.spells = [_obsessiveBurst, _aggression],
                _hunterShoes,
                _hunterShoes.spells = [_refreshingSprint, _quickThinker],
                _lightcaller,
                _lightcaller.spells = [_pulseShock, _distortion, _dawnbirdTransformation, _ruleBender],
                _caerleonCape,
                _minorEnergyPotion,
                _deadwaterEelStew
            ];
            swapItems = [
                _morganaCape,
                _royalCowl
            ];

            name = "Lightcaller";
            gName = "Lichtrufer";

            rol = "DD";

            descriptions = {
                bosses: {
                    avalonianArchmage: [_morganaCape, _royalCowl],
                    avalonianConstruct: [_morganaCape, _royalCowl],
                    avalonianCrystalBasilisk: [_morganaCape, _royalCowl],
                    avalonianKnightCaptain: [_morganaCape, _royalCowl],
                    avalonianHighPriestess: [_morganaCape, _royalCowl],
                    sirBedivere: [_morganaCape, _royalCowl]
                },
            };
            break;
        case "blazing":
            build = [
                _assassinHood,
                _assassinHood.spells = [_meditationHead, _quickThinker],
                _druidRobe,
                _druidRobe.spells = [_obsessiveBurst, _aggression],
                _royalSandals,
                _royalSandals.spells = [_defenselessRush, _aggression],
                _blazingStaff,
                _blazingStaff.spells = [_burningField, _ragingFlare, _flameTornado, _furios],
                _caerleonCape,
                _minorEnergyPotion,
                _deadwaterEelStew
            ];
            swapItems = [
                _wildfireStaff,
                _cryptcandle,
                _royalCowl,
                _morganaCape
            ];

            name = "Blazing";
            gName = "Gleißender";

            rol = "DD";

            descriptions = {
                bosses: {
                    avalonianArchmage: [_wildfireStaff, _cryptcandle, _royalCowl, _morganaCape],
                    avalonianConstruct: [_wildfireStaff, _cryptcandle, _royalCowl, _morganaCape],
                    avalonianCrystalBasilisk: [_wildfireStaff, _cryptcandle, _royalCowl, _morganaCape],
                    avalonianKnightCaptain: [_wildfireStaff, _cryptcandle, _royalCowl, _morganaCape],
                    avalonianHighPriestess: [],
                    sirBedivere: [_wildfireStaff, _cryptcandle, _royalCowl, _morganaCape]
                },
            };
            break;
        case "scout":
            build = [
                _knightHelmet,
                _knightHelmet.spells = [_displacementImmunity, _toughness],
                _knightArmor,
                _knightArmor.spells = [_windWall, _toughnessArmor, _spiritCrushArmor],
                _soldierBoots,
                _soldierBoots.spells = [_wanderlust, _toughness],
                _bloodletter,
                _bloodletter.spells = [_assassinSpirit, _dash, _lungingStabs, _deepCuts],
                _mistcaller,
                _invisibilityPotion,
                _porkOmelette
            ];
            swapItems = [
                _greatArcane,
                _specterShoes,
                _icicleStaff,
                _mistwalkerJacket,
                _majorStickyPotion
            ];

            name = "Scout";
            gName = "Kundschafter";

            rol = "Core";

            descriptions = {
                bosses: {
                    avalonianArchmage: [],
                    avalonianConstruct: [],
                    avalonianCrystalBasilisk: [],
                    avalonianKnightCaptain: [],
                    avalonianHighPriestess: [],
                    sirBedivere: []
                },
            };
            break;
        default:
            break;
    };

    buildTitle = document.getElementById("build_title");
    buildTitle.innerText = name;
    buildTitle.setAttribute("title", gName);

    for (i = 0; i < build.length; i++) {
        item = getItem(build[i]);
        item.then(function (item) {
            el = document.getElementById(item.pos);
            el.innerHTML = `
                <img class="rounded equipIcon" src="${item[0].icon}" title="${item.name} / ${item.gName}">
            `;

            if ("main head armor shoes".includes(item.pos)) {
                el = document.getElementById(`${item.pos}-spells`);
                el.innerHTML = `
                    <p title="${item.gName}">${item.name}</p>
                 `;

                el = document.getElementById(`${item.pos}-icon`);
                el.innerHTML = `
                    <img class="rounded equipIconSmall m-auto" src="${item[0].icon}" title="${item.name} / ${item.gName}">
                `;
                for (j = 0; j < item.spells.length; j++) {
                    el = document.getElementById(`${item.pos}-spell-${j + 1}`);
                    el.innerHTML = `
                        <img class="spell-icon" title="${item.spells[j].name} / ${item.spells[j].gName}" src="https://render.albiononline.com/v1/spell/${item.spells[j].id}.png">
                    `;
                }
            }

            if (descriptions.bosses.avalonianArchmage) {
                el = document.getElementById("archmage-swaps");
                if (descriptions.bosses.avalonianArchmage.length > 0) {
                    el.innerHTML = "";
                }
                descriptions.bosses.avalonianArchmage.forEach(item => {
                    el.innerHTML += `
                        <p title="${item.gName}">${item.name}</p>
                    `
                });
            }

            if (descriptions.bosses.avalonianConstruct) {
                el = document.getElementById("construct-swaps");
                if (descriptions.bosses.avalonianConstruct.length > 0) {
                    el.innerHTML = "";
                }
                descriptions.bosses.avalonianConstruct.forEach(item => {
                    el.innerHTML += `
                        <p title="${item.gName}">${item.name}</p>
                    `
                });
            }

            if (descriptions.bosses.avalonianCrystalBasilisk) {
                el = document.getElementById("basi-swaps");
                if (descriptions.bosses.avalonianCrystalBasilisk.length > 0) {
                    el.innerHTML = "";
                }
                descriptions.bosses.avalonianCrystalBasilisk.forEach(item => {
                    el.innerHTML += `
                        <p title="${item.gName}">${item.name}</p>
                    `
                });
            }

            if (descriptions.bosses.avalonianKnightCaptain) {
                el = document.getElementById("knight-captain-swaps");
                if (descriptions.bosses.avalonianKnightCaptain.length > 0) {
                    el.innerHTML = "";
                }
                descriptions.bosses.avalonianKnightCaptain.forEach(item => {
                    el.innerHTML += `
                        <p title="${item.gName}">${item.name}</p>
                    `
                });
            }

            if (descriptions.bosses.avalonianHighPriestess) {
                el = document.getElementById("pinata-swaps");
                if (descriptions.bosses.avalonianHighPriestess.length > 0) {
                    el.innerHTML = "";
                }
                descriptions.bosses.avalonianHighPriestess.forEach(item => {
                    el.innerHTML += `
                        <p title="${item.gName}">${item.name}</p>
                    `
                });
            }

            if (descriptions.bosses.sirBedivere) {
                el = document.getElementById("endboss-swaps");
                if (descriptions.bosses.sirBedivere.length > 0) {
                    el.innerHTML = "";
                }
                descriptions.bosses.sirBedivere.forEach(item => {
                    el.innerHTML += `
                        <p title="${item.gName}">${item.name}</p>
                    `
                });
            }
        });
    };

    document.getElementById("swaps").innerHTML = "";
    for (i = 0; i < swapItems.length; i++) {
        item = getItem(swapItems[i]);
        item.then(function (item) {
            el = document.getElementById("swaps");
            el.innerHTML += `
            <div class="col-4">
                <img class="rounded equipIcon" src="${item[0].icon}" title="${item.name} / ${item.gName}">
            </div>
            `;
        });
    }
}

async function getItem(item) {
    try {
        response = await fetch(`https://api.openalbion.com/api/v3/${item.type}-stats/${item.type}/${item.id}`);
        data = await response.json();
        responseItem = data.data;
        responseItem.name = item.name;
        responseItem.gName = item.gName;
        responseItem.pos = item.pos;
        responseItem.spells = item.spells;
        responseItem.descriptions = item.descriptions;

        return responseItem;
    } catch (e) {
        console.log("Err", e);
    }
}

async function getSpellsFromItem(item) {
    try {
        response = await fetch(`https://api.openalbion.com/api/v3/spells/${item.type}/${item.id}`);
        data = await response.json();
        responseItem = data.data;
        return responseItem;
    } catch (e) {
        console.log("Err", e);
    }
}