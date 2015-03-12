describe('layout', function () {
    describe('template', function () {
        it('shows heading', function () {
            expect($('h1').text()).toBe('Weather and Traffic Live Map');
        });
    });
});