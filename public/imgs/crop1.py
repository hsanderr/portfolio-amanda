from PIL import Image

def crop_left_and_right_and_save(input_image_path, output_image_path):
    # Open the image using Pillow
    image = Image.open(input_image_path)

    # Get the dimensions of the image
    width, height = image.size

    # Calculate the amount to crop from each side
    crop_amount = 32.43

    # Calculate the new dimensions after cropping
    new_width = width - (2 * crop_amount)  # 102 pixels from each side

    # Define the box to crop from (left, upper, right, lower)
    box = (crop_amount, 0, width - crop_amount, height)

    # Crop the image
    cropped_image = image.crop(box)

    # Save the cropped image to a new file
    cropped_image.save(output_image_path)


if __name__ == "__main__":
    input_image_path = "perpetua.jpeg"  # Change this to your input image file
    output_image_path = "perpetuacrop.jpeg"  # Change this to your desired output file

    crop_left_and_right_and_save(input_image_path, output_image_path)
