# AES256 Module using C#

- AES256 Encrypt

```
public String AESEncrypt256(String Input, String key)
        {
            RijndaelManaged aes = new RijndaelManaged();
            byte[] input = Encoding.Unicode.GetBytes(Input);
            byte[] keyInfo = Encoding.ASCII.GetBytes(key.Length.ToString());
            PasswordDeriveBytes SecretKey = new PasswordDeriveBytes(key, keyInfo);
            ICryptoTransform Encryptor = aes.CreateEncryptor(SecretKey.GetBytes(32), SecretKey.GetBytes(16));

            byte[] xBuff = null;
            using (var ms = new MemoryStream())
            {
                using (var cs = new CryptoStream(ms, Encryptor, CryptoStreamMode.Write))
                {
                    byte[] xXml = Encoding.UTF8.GetBytes(Input);
                    cs.Write(xXml, 0, xXml.Length);
                }

                xBuff = ms.ToArray();
            }

            String Output = Convert.ToBase64String(xBuff);
            return Output;

        }
```

- AES256 Decrypt

```
public String AESDecrypt256(String Input, String key)
        {
            RijndaelManaged aes = new RijndaelManaged();
            byte[] input = Encoding.Unicode.GetBytes(Input);
            byte[] keyInfo = Encoding.ASCII.GetBytes(key.Length.ToString());
            PasswordDeriveBytes SecretKey = new PasswordDeriveBytes(key, keyInfo);
            ICryptoTransform Decryptor = aes.CreateDecryptor(SecretKey.GetBytes(32), SecretKey.GetBytes(16));
            
            byte[] xBuff = null;
            using (var ms = new MemoryStream())
            {
                using (var cs = new CryptoStream(ms, Decryptor, CryptoStreamMode.Write))
                {
                    byte[] xXml = Convert.FromBase64String(Input);
                    cs.Write(xXml, 0, xXml.Length);
                }

                xBuff = ms.ToArray();
            }

            String Output = Encoding.UTF8.GetString(xBuff);
            return Output;

        }
```

