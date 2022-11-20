
with open(r'access_130101.log','r') as file:
    data = file.read()
    sum=0
    windows_users=data.count('Windows')
    print(windows_users)
    sum+=windows_users
    iphone_users=data.count('iPhone')
    print(iphone_users)
    sum += iphone_users
    ipad_users = data.count('iPad')
    print(ipad_users)
    sum += ipad_users
    android_users=data.count('Android')
    print(android_users)
    sum += android_users
    print(sum)
    print('windows-',windows_users/sum*100)
    print('iphone-', iphone_users / sum * 100)
    print('ipad-', ipad_users / sum * 100)
    print('android-', android_users / sum * 100)
