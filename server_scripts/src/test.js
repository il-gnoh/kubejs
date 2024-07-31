ServerEvents.recipes(event => {
    event.forEachRecipe(
        // 第一个参数 filter，所有输出产物带有 slabs 标签的有序合成
        {
            // type: "shaped", 
            output: '#minecraft:planks'
        }, r => {    // 匿名函数，它将对每一个满足 filter 的合成表 r 都执行一遍
            console.log(r.getOriginalRecipeResult().getId())
            // 我们并不希望更改原配方，只是希望获取一下输入输出物品 id
            var slab_id = r.getOriginalRecipeResult().getId()
            var block_id = r.getOriginalRecipeIngredients()[0].getItemIds()[0]
            // 对外部的event进行操作，即添加一个无序合成配方
            event.shapeless(Item.of(slab_id, 2), block_id)
        })

    event.remove({ output: '#minecraft:planks' })
})



BlockEvents.rightClicked(event => {
    // 获取右击的方块
    let block = event.block;

    // 检查右击的方块是否是去皮原木
    if (block.id.startsWith('minecraft:stripped_')) {
        // 检查右击的工具是否是斧头
        if (event.item.id.includes('_axe')) {
            // if (event.item.id.includes('minecraft:cooked_beef')) {
            event.item.setDamageValue(event.item.damageValue + 1)
            // event.item.setCount(--event.item.count)
            let logId = getPlankId(block.id)
            // 设置新的方块为空气（去掉原来的方块）
            block.set('minecraft:air');

            let posX = event.block.x
            let posY = event.block.y
            let posZ = event.block.z

            // 在特定位置生成掉落的木板
            event.server.runCommandSilent(`particle minecraft:block oak_log ${posX} ${posY} ${posZ} 0.5 0.5 0.5 0.1 100`)
            // event.server.runCommandSilent(`summon item ${posX} ${posY + 1} ${posZ} {Item:{id:'${logId}',Count:2}}`)
            event.level.playSound(null, posX, posY, posZ, "block.wood.break", "master", 1, 1)
            block.popItemFromFace(logId, "up")
        }
    }
});
