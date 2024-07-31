let i = [
    [//草
        {
            "type": "minecraft:alternatives",
            "children": [
                {//草
                    "type": "minecraft:item",
                    "conditions": [
                        {
                            "action": "shears_dig",
                            "condition": "forge:can_tool_perform_action"
                        }
                    ],
                    "name": "minecraft:grass"
                },
                {//种子
                    "type": "minecraft:item",
                    "conditions": [
                        {
                            "chance": 0.125,
                            "condition": "minecraft:random_chance"
                        }
                    ],
                    "functions": [
                        {
                            "enchantment": "minecraft:fortune",
                            "formula": "minecraft:uniform_bonus_count",
                            "function": "minecraft:apply_bonus",
                            "parameters": {
                                "bonusMultiplier": 2
                            }
                        },
                        {
                            "function": "minecraft:explosion_decay"
                        }
                    ],
                    "name": "minecraft:wheat_seeds"
                }
            ]
        }
    ],
    [//蜘蛛网
        {
            "type": "minecraft:alternatives",
            "children": [
                {//蜘蛛网
                    "type": "minecraft:item",
                    "conditions": [
                        {
                            "condition": "minecraft:any_of",
                            "terms": [
                                {
                                    "action": "shears_dig",
                                    "condition": "forge:can_tool_perform_action"
                                },
                                {
                                    "condition": "minecraft:match_tool",
                                    "predicate": {
                                        "enchantments": [
                                            {
                                                "enchantment": "minecraft:silk_touch",
                                                "levels": {
                                                    "min": 1
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ],
                    "name": "minecraft:cobweb"
                },
                {//线
                    "type": "minecraft:item",
                    "conditions": [
                        {
                            "condition": "minecraft:survives_explosion"
                        }
                    ],
                    "name": "minecraft:string"
                }
            ]
        }
    ],
    [//钻石矿
        {
            "type": "minecraft:alternatives",
            "children": [
                {//钻石原矿
                    "type": "minecraft:item",
                    "conditions": [
                        {
                            "condition": "minecraft:match_tool",
                            "predicate": {
                                "enchantments": [
                                    {
                                        "enchantment": "minecraft:silk_touch",
                                        "levels": {
                                            "min": 1
                                        }
                                    }
                                ]
                            }
                        }
                    ],
                    "name": "minecraft:diamond_ore"
                },
                {//钻石
                    "type": "minecraft:item",
                    "functions": [
                        {
                            "enchantment": "minecraft:fortune",
                            "formula": "minecraft:ore_drops",
                            "function": "minecraft:apply_bonus"
                        },
                        {
                            "function": "minecraft:explosion_decay"
                        }
                    ],
                    "name": "minecraft:diamond"
                }
            ]
        }
    ],
    [//青金石
        {
            "type": "minecraft:alternatives",
            "children": [
                {//精准采集青金石
                    "type": "minecraft:item",
                    "conditions": [
                        {
                            "condition": "minecraft:match_tool",
                            "predicate": {
                                "enchantments": [
                                    {
                                        "enchantment": "minecraft:silk_touch",
                                        "levels": {
                                            "min": 1
                                        }
                                    }
                                ]
                            }
                        }
                    ],
                    "name": "minecraft:lapis_ore"
                },
                {//时运青金石
                    "type": "minecraft:item",
                    "functions": [
                        {
                            "add": false,
                            "count": {
                                "type": "minecraft:uniform",
                                "max": 9.0,
                                "min": 4.0
                            },
                            "function": "minecraft:set_count"
                        },
                        {
                            "enchantment": "minecraft:fortune",
                            "formula": "minecraft:ore_drops",
                            "function": "minecraft:apply_bonus"
                        },
                        {
                            "function": "minecraft:explosion_decay"
                        }
                    ],
                    "name": "minecraft:lapis_lazuli"
                }
            ]
        }
    ],
    [//铜矿石
        {
            "type": "minecraft:alternatives",
            "children": [
                {
                    "type": "minecraft:item",
                    "conditions": [
                        {
                            "condition": "minecraft:match_tool",
                            "predicate": {
                                "enchantments": [
                                    {
                                        "enchantment": "minecraft:silk_touch",
                                        "levels": {
                                            "min": 1
                                        }
                                    }
                                ]
                            }
                        }
                    ],
                    "name": "minecraft:copper_ore"
                },
                {
                    "type": "minecraft:item",
                    "functions": [
                        {
                            "add": false,
                            "count": {
                                "type": "minecraft:uniform",
                                "max": 5.0,
                                "min": 2.0
                            },
                            "function": "minecraft:set_count"
                        },
                        {
                            "enchantment": "minecraft:fortune",
                            "formula": "minecraft:ore_drops",
                            "function": "minecraft:apply_bonus"
                        },
                        {
                            "function": "minecraft:explosion_decay"
                        }
                    ],
                    "name": "minecraft:raw_copper"
                }
            ]
        }
    ] 
]