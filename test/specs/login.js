describe('Test Suite for Pagii.co Development', () => {
    beforeEach(()   =>  {
        driver.launchApp()
    });
    
    afterEach(()   =>  {
        driver.closeApp()
    });

    it('Login Pagii as Employee with valid credential', async() => {
        let email = 'testbug@smooets.com'
        let password = 'password'
        await $("//android.widget.EditText[@text='contoh, nama@email.com']").setValue(email);
        await $("//android.widget.EditText[@text='masukan kata sandi anda disini']").setValue(password);
        await $("//android.view.ViewGroup//android.widget.TextView[@text='MASUK']").click();
    });
    it('Login Pagii as Employee with invalid credential', async() => {
        let email = 'testbug@smooets.com'
        let password = '12345678'
        await $("//android.widget.EditText[@text='contoh, nama@email.com']").setValue(email);
        await $("//android.widget.EditText[@text='masukan kata sandi anda disini']").setValue(password);
        await $("//android.view.ViewGroup//android.widget.TextView[@text='MASUK']").click();
        const messageInvalidCredential = await $('//android.view.ViewGroup//android.widget.TextView[contains(@text,"Email atau password salah")]')
        await expect(messageInvalidCredential).toHaveText('Email atau password salah');
        await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView").click();
    });
});