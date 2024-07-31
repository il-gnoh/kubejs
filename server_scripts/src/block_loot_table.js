ServerEvents.blockLootTables(event => {
    event.modifyBlock('minecraft:grass', loot => {
        // let pool = [{
        //     "type": "minecraft:item",
        //     "name": "ilgnoh_add:grass_fiber",
        //     "conditions": [
        //                 {
        //                     "condition": "minecraft:any_of",
        //                     "terms": [
        //                         {
        //                             "condition": "minecraft:match_tool",
        //                             "predicate": {
        //                                 "tag": "axes"
        //                             }
        //                         }
        //                     ]
        //                 },{
        //                     "chance": 0.5,
        //                     "condition": "minecraft:random_chance"
        //                 }
        //             ]
        // }]

        let pool = [{
            "type": "minecraft:alternatives",
            "children": [
                {
                    "type": "minecraft:item",
                    "conditions": [
                        {
                            "condition": "minecraft:any_of",
                            "terms": [
                                {
                                    "condition": "minecraft:match_tool",
                                    "predicate": {
                                        "tag": "axes"
                                    }
                                }
                            ]
                        },
                        {
                            "chance": 0.725,
                            "condition": "minecraft:random_chance"
                        }
                    ],
                    "functions": [
                        {
                            "add": false,
                            "count": {
                                "type": "minecraft:uniform",
                                "max": 3.0,
                                "min": 0//如添加方法必填，最小0
                            },
                            "function": "minecraft:set_count"
                        },
                        {
                            "enchantment": "minecraft:fortune",
                            "formula": "minecraft:ore_drops",
                            "function": "minecraft:apply_bonus",
                            "parameters": {
                                "bonusMultiplier": 0.8//乘时运掉落，只用于"formula": "minecraft:uniform_bonus_count"
                            }
                        },
                        {
                            "function": "minecraft:explosion_decay"
                        }
                    ],

                    "name": "ilgnoh_add:grass_fiber"
                }
            ]
        }]

        let arr = loot.pools.get(0).asJsonObject.get("entries").asJsonArray
        arr.addAll(pool)

        console.log(loot.pools.get(0).asJsonObject.get("entries").asJsonArray);
    })
})