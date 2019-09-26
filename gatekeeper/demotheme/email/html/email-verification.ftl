<html>
<body>
<div>
${kcSanitize(msg("emailVerificationBodyHtml",link, linkExpiration, realmName, linkExpirationFormatter(linkExpiration), user.firstName, user.username))?no_esc}
</div>
</body>
</html>