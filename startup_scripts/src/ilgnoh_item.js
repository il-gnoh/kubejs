StartupEvents.registry("item",event=>{
    event.create("ilgnoh_add:grass_string","basic").tag("string")
    event.create("ilgnoh_add:grass_fiber","basic").tag("string")
    event.create("ilgnoh_add:crude_hatchet_axe","axe").tag("axes").tooltip(`§9简易制作的斧头,非常容易松动`).attackDamageBaseline(3).speedBaseline(-3.3).maxDamage(24)
})