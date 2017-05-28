window.xapi = {

    // when searching for a gamertag this should be populated
    currentXUID: '',
    apiKey: '4748119d4f5bba0fe7704367fa683cec11180832',

    makeRequest: function (endpoint, success, fail) {
        $.ajax({
            url: 'https://xboxapi.com' + endpoint,
            headers: {
                'X-Auth': this.apiKey
            }
        })
            .done(function (data) { success(data); })
            .fail(function (data) {
                if (fail) {
                    fail(data);
                }
                else {
                    console.log(data);
                }
            });
    },

    getXUID: function (gamertag, success, fail) {
        this.makeRequest(`/v2/xuid/${gamertag}`, success, fail);
    },

    getActivity: function (xuid, success, fail) {
        this.makeRequest(`/v2/${xuid}/activity`, success, fail);
    },

    getGameClips: function (xuid, success, fail) {
        this.makeRequest(`/v2/${xuid}/game-clips`, success, fail);
    },

    getLatestGames: function (success, fail) {
        this.makeRequest(`/v2/latest-xboxone-games`, success, fail);
    },

    getGamesWithGold: function (success, fail) {
        this.makeRequest(`/v2/xboxone-gold-lounge`, success, fail);
    },

    getProfile: function (xuid, success, fail) {
        this.makeRequest(`/v2/${xuid}/profile`, success, fail);
    },

    getFriends: function (xuid, success, fail) {
        this.makeRequest(`/v2/${xuid}/friends`, success, fail);
    },
};