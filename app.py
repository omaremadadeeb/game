import random

def game():
    # الحاسوب يختار رقمًا عشوائيًا بين 1 و100
    number_to_guess = random.randint(1, 100)
    
    # عدد المحاولات
    attempts = 0
    
    print("مرحبًا! أنا أفكر في رقم بين 1 و100.")
    print("حاول تخمين الرقم!")
    
    while True:
        # اللاعب يدخل رقمه
        user_guess = input("ادخل رقمك: ")
        
        # التحقق من أن المدخل هو رقم
        if not user_guess.isdigit():
            print("الرجاء إدخال رقم!")
            continue
        
        # تحويل المدخل إلى رقم
        user_guess = int(user_guess)
        
        # زيادة عدد المحاولات
        attempts += 1
        
        # التحقق من الرقم
        if user_guess < number_to_guess:
            print("الرقم الذي أدخلته أقل من الرقم الذي أفكر فيه.")
        elif user_guess > number_to_guess:
            print("الرقم الذي أدخلته أكبر من الرقم الذي أفكر فيه.")
        else:
            print(f"مبروك! الرقم الصحيح هو {number_to_guess}.")
            print(f"استغرق الأمر {attempts} محاولات.")
            break

if __name__ == "__main__":
    game()