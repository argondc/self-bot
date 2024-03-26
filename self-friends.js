require('dotenv').config();
const fetch = require("node-fetch");

(async () => {
    const token = process.env.TOKEN;

    const response = await fetch(`https://discord.com/api/users/@me/relationships`, {
        headers: {
            "Content-Type": "application/json",
            'Authorization': token,
        }
    });

    for (let friends of await response.json()) {
        const { user } = friends;
        const friend = `${user.username} (${user.global_name})`;

        await fetch(`https://discord.com/api/users/@me/relationships/${user.id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'Authorization': token,
            }
        });

        console.log(`Usuário deletado: ${friend}`);
    }
})();
