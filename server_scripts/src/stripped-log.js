function getPlankId(strippedLogId) {
    // 定义一个对象，用于存储去皮原木 ID 和对应的木板 ID
    const strippedLogToPlank = {
        'minecraft:stripped_oak_log': 'minecraft:oak_planks',
        'minecraft:stripped_spruce_log': 'minecraft:spruce_planks',
        'minecraft:stripped_birch_log': 'minecraft:birch_planks',
        'minecraft:stripped_jungle_log': 'minecraft:jungle_planks',
        'minecraft:stripped_acacia_log': 'minecraft:acacia_planks',
        'minecraft:stripped_dark_oak_log': 'minecraft:dark_oak_planks',
        'minecraft:stripped_mangrove_log': 'minecraft:mangrove_planks',
        'minecraft:stripped_crimson_stem': 'minecraft:crimson_planks',
        'minecraft:stripped_warped_stem': 'minecraft:warped_planks'
    };

    // 查找传入的去皮原木 ID 对应的木板 ID
    return strippedLogToPlank[strippedLogId] || 'Unknown stripped log ID';
}